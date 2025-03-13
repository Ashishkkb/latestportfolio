"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-800 pt-24 md:pt-32"
    >
      <div className="container mx-auto px-6 flex flex-col items-center text-center">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
        >
          Ashish Kumar Behera
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mb-8"
        >
          Creative Developer | AI Enthusiast | Marketplace Creator
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex space-x-6 mb-10"
        >
          <a
            href="https://www.linkedin.com/in/ashishkubehera/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-3xl hover:text-blue-600 transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/yourgithub"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-3xl hover:text-gray-800 transition-colors duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:your.email@example.com"
            aria-label="Email"
            className="text-3xl hover:text-red-600 transition-colors duration-300"
          >
            <FaEnvelope />
          </a>
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl"
        >
          <Link
            href="/marketplace"
            className="block bg-gray-100 hover:bg-gray-200 transition-colors p-8 rounded-lg shadow"
          >
            <h2 className="text-2xl font-bold mb-4">Marketplace</h2>
            <p className="text-gray-700">
              Explore and purchase high-quality components and templates.
            </p>
          </Link>
          <Link
            href="/portfolio"
            className="block bg-gray-100 hover:bg-gray-200 transition-colors p-8 rounded-lg shadow"
          >
            <h2 className="text-2xl font-bold mb-4">Portfolio</h2>
            <p className="text-gray-700">
              View my projects and experiences in creative development and AI.
            </p>
          </Link>
        </motion.div>
      </div>
    </motion.main>
  );
}
