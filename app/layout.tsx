import { Inter } from "next/font/google"
import { Nav } from "@/components/nav"
import "./globals.css"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Ashish Ku behera - Portfolio & Marketplace",
  description: "Creative Developer, AI Enthusiast, and Marketplace for Components and Templates",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
      </body>
    </html>
  )
}

import "./globals.css"

