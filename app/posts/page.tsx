"use client"

import { motion } from "framer-motion"

const posts = [
  {
    title: "First Post",
    date: "2024-02-13",
    excerpt: "This is a sample excerpt for the first post.",
  },
  {
    title: "Second Post",
    date: "2024-02-12",
    excerpt: "This is a sample excerpt for the second post.",
  },
]

export default function Posts() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-black text-white pt-32"
    >
      <div className="container">
        <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-4xl font-bold mb-12">
          Posts
        </motion.h1>
        <div className="space-y-12">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <time className="text-sm text-gray-400">{post.date}</time>
              <h2 className="text-2xl font-medium mt-2 mb-4">{post.title}</h2>
              <p className="text-gray-400">{post.excerpt}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.main>
  )
}

