"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

const links = [
  { href: "/home", label: "Home" },
  { href: "/marketplace", label: "Marketplace" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
]

export function Nav() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 w-full z-40 bg-[#020410]/80 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <Link href="/home" className="text-white text-xl font-medium">
          Ashish Kumar Behera
        </Link>
        <ul className="flex items-center gap-8">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className="text-white relative">
                {pathname === href && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 top-full block h-[2px] w-full bg-white"
                  />
                )}
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

