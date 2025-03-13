"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { useUser } from "./UserProvider";
import { useState } from "react";

// A modern link component with a subtle scale on hover and animated underline for active routes.
interface ModernLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const ModernLink = ({ href, children, className }: ModernLinkProps) => {
  return (
    <Link href={href}>
      <motion.a
        className={`relative inline-block transition-colors duration-300 ease-in-out ${className}`}
        whileHover={{ scale: 1.05 }}
      >
        {children}
      </motion.a>
    </Link>
  );
};

export function Nav() {
  const pathname = usePathname();
  const { user, loading } = useUser();

  // Public links (visible to everyone)
  const publicLinks = [
    { href: "/home", label: "Home" },
    { href: "/marketplace", label: "Marketplace" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/about", label: "About" },
  ];

  // Private links (only visible when logged in)
  const privateLinks = [
    { href: "/posts", label: "Posts" },
    { href: "/projects", label: "Projects" },
    { href: "/dashboard", label: "Dashboard" },
    { href: "/upload", label: "Upload" },
  ];

  // Merge links based on user authentication
  const navLinks = user ? [...publicLinks, ...privateLinks] : publicLinks;

  if (loading) return null;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-lg shadow-md border-b border-gray-200">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-4 px-6 text-gray-800">
        {/* Branding */}
        <div className="mb-4 md:mb-0">
          <ModernLink href="/home" className="text-2xl font-bold">
            Ashish Kumar Behera
          </ModernLink>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-wrap items-center gap-4 md:gap-8 justify-center">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <li key={href} className="relative">
                <ModernLink
                  href={href}
                  className={`hover:text-gray-600 transition-colors duration-300 ${
                    isActive ? "font-semibold" : "font-normal"
                  }`}
                >
                  {label}
                  {isActive && (
                    <motion.span
                      layoutId="underline"
                      className="absolute left-0 top-full block h-[2px] w-full bg-gradient-to-r from-blue-500 to-blue-700"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </ModernLink>
              </li>
            );
          })}
        </ul>

        {/* User Actions */}
        <div className="mt-4 md:mt-0 flex items-center space-x-4">
          {!user && (
            <ModernLink href="/auth">
              <Button
                variant="outline"
                className="hover:bg-blue-600 hover:text-white transition-colors duration-300"
              >
                Login / Sign Up
              </Button>
            </ModernLink>
          )}
        </div>
      </div>
    </nav>
  );
}
