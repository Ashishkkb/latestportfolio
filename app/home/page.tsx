"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-[#020410] to-[#090b1f] text-white pt-32"
    >
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-6xl font-bold mb-8"
        >
          Ashish Kumar ehera
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl text-gray-300 max-w-2xl mb-8"
        >
          Creative Developer | AI Enthusiast | Marketplace Creator
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex space-x-4 mb-12"
        >
          <a
            href="https://www.linkedin.com/in/ashishkubehera/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-blue-400"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/yourgithub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-gray-400"
          >
            <FaGithub />
          </a>
          <a href="mailto:your.email@example.com" className="text-2xl hover:text-red-400">
            <FaEnvelope />
          </a>
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <Link href="/marketplace" className="bg-white/10 p-6 rounded-lg hover:bg-white/20 transition-colors">
            <h2 className="text-2xl font-bold mb-4">Marketplace</h2>
            <p className="text-gray-300">Explore and purchase high-quality components and templates.</p>
          </Link>
          <Link href="/portfolio" className="bg-white/10 p-6 rounded-lg hover:bg-white/20 transition-colors">
            <h2 className="text-2xl font-bold mb-4">Portfolio</h2>
            <p className="text-gray-300">View my projects and experiences in creative development and AI.</p>
          </Link>
        </motion.div>
      </div>
    </motion.main>
  )
}

