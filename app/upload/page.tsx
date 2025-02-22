"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useUser } from "../../components/UserProvider"
import { supabase } from "../../lib/supabase"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Checkbox } from "../../components/ui/checkbox"
import { useToast } from "../../components/ui/use-toast"

export default function Upload() {
  const { user, loading } = useUser()
  const router = useRouter()
  const [title, setTitle] = useState("")
  const [file, setFile] = useState<File | null>(null)
  const [isPaid, setIsPaid] = useState(false)
  const [price, setPrice] = useState("")
  const { toast } = useToast()

  if (loading) return <div>Loading...</div>
  if (!user) {
    router.push("/login")
    return null
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!file) return

    try {
      // Upload file to Supabase Storage
      const fileExt = file.name.split(".").pop()
      const fileName = `${Math.random()}.${fileExt}`
      const { data, error } = await supabase.storage.from("ui-uploads").upload(fileName, file)

      if (error) throw error

      // Create record in ui_uploads table
      const { data: uploadData, error: uploadError } = await supabase.from("ui_uploads").insert({
        user_id: user.id,
        title: title,
        file_path: data.path,
        is_paid: isPaid,
        price: isPaid ? Number.parseFloat(price) : null,
      })

      if (uploadError) throw uploadError

      toast({
        title: "Success",
        description: "UI uploaded successfully!",
      })
      router.push("/dashboard")
    } catch (error) {
      if (error instanceof Error) {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        })
      }
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Upload UI</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input type="text" placeholder="UI Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <Input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} required />
        <div className="flex items-center space-x-2">
          <Checkbox id="isPaid" checked={isPaid} onCheckedChange={(checked) => setIsPaid(checked as boolean)} />
          <label htmlFor="isPaid">Paid UI</label>
        </div>
        {isPaid && (
          <Input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
        )}
        <Button type="submit">Upload</Button>
      </form>
    </div>
  )
}

