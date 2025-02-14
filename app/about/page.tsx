"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-black text-white pt-32"
    >
      <div className="container max-w-2xl">
        <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-4xl font-bold mb-12">
          About
        </motion.h1>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="prose prose-invert"
        >
          <p className="text-xl leading-relaxed">
            I'm a creative developer focused on building beautiful digital experiences. With a background in both design
            and development, I bring a unique perspective to every project I work on.
          </p>
          <p className="text-xl leading-relaxed">
            My work spans from interactive websites to digital installations, always with a focus on animation and user
            experience.
          </p>
        </motion.div>
      </div>
    </motion.main>
  )
}

