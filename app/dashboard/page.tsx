"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useUser } from "../../components/UserProvider"
import { supabase } from "../../lib/supabase"
import { Button } from "../../components/ui/button"
import { useToast } from "../../components/ui/use-toast"

interface UIUpload {
  id: number
  title: string
  views: number
  is_paid: boolean
}

export default function Dashboard() {
  const { user, loading } = useUser()
  const router = useRouter()
  const [uiUploads, setUiUploads] = useState<UIUpload[]>([])
  const { toast } = useToast()

  useEffect(() => {
    if (!loading && !user) {
      router.push("/auth")
    } else if (user) {
      fetchUiUploads()
    }
  }, [user, loading, router])

  const fetchUiUploads = async () => {
    const { data, error } = await supabase.from("ui_uploads").select("*").eq("user_id", user?.id)

    if (error) {
      console.error("Error fetching UI uploads:", error)
      toast({
        title: "Error",
        description: "Failed to fetch UI uploads",
        variant: "destructive",
      })
    } else {
      setUiUploads(data || [])
    }
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push("/auth")
  }

  if (loading) {
    return <div>Loading...</div>
  }

  if (!user) {
    return null
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <Button onClick={handleSignOut}>Sign Out</Button>
      <h2 className="text-xl font-semibold mt-8 mb-4">Your UI Uploads</h2>
      {uiUploads.length === 0 ? (
        <p>You haven't uploaded any UIs yet.</p>
      ) : (
        <ul>
          {uiUploads.map((ui) => (
            <li key={ui.id} className="mb-2">
              {ui.title} - Views: {ui.views} - {ui.is_paid ? "Paid" : "Free"}
            </li>
          ))}
        </ul>
      )}
      <Button onClick={() => router.push("/upload")} className="mt-4">
        Upload New UI
      </Button>
    </div>
  )
}

