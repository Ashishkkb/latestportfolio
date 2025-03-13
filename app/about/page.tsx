"use client"

import { motion } from "framer-motion"
import { useState } from "react"

interface Offset {
  x: number
  y: number
}

interface FloatingShape {
  id: number
  top: string
  left: string
  size: number
  rotate: number
  color: string
}

interface FloatingShapesProps {
  offset: Offset
}

// Glossy circular shapes with gradient background
function FloatingShapes({ offset }: FloatingShapesProps) {
  const shapes: FloatingShape[] = [
    { id: 1, top: "10%", left: "15%", size: 80, rotate: 15, color: "from-pink-200 to-yellow-200" },
    { id: 2, top: "40%", left: "80%", size: 100, rotate: -20, color: "from-blue-200 to-green-200" },
    { id: 3, top: "70%", left: "25%", size: 120, rotate: 10, color: "from-purple-200 to-pink-200" },
  ]

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={`absolute rounded-full bg-gradient-to-br ${shape.color} opacity-70`}
          style={{
            width: shape.size,
            height: shape.size,
            top: shape.top,
            left: shape.left,
            transform: `perspective(800px) translate3d(${offset.x / 2}px, ${offset.y / 2}px, 0) rotate(${shape.rotate}deg)`,
          }}
          animate={{
            rotate: [shape.rotate, shape.rotate + 360],
          }}
          whileHover={{
            scale: 1.2,
            filter: "brightness(1.4)",
            boxShadow: "0 6px 20px rgba(255,255,255,0.8)",
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}

// Hexagon shapes using CSS clip-path for a modern, polygonal look.
function FloatingHexagons({ offset }: FloatingShapesProps) {
  const hexagons: FloatingShape[] = [
    { id: 1, top: "20%", left: "60%", size: 90, rotate: 30, color: "from-green-200 to-blue-200" },
    { id: 2, top: "60%", left: "70%", size: 110, rotate: -10, color: "from-yellow-200 to-red-200" },
  ]
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {hexagons.map((hex) => (
        <motion.div
          key={hex.id}
          className={`absolute bg-gradient-to-br ${hex.color} opacity-70`}
          style={{
            width: hex.size,
            height: hex.size,
            top: hex.top,
            left: hex.left,
            clipPath: "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
            transform: `perspective(800px) translate3d(${offset.x / 2}px, ${offset.y / 2}px, 0) rotate(${hex.rotate}deg)`,
          }}
          animate={{
            rotate: [hex.rotate, hex.rotate + 360],
          }}
          whileHover={{
            scale: 1.2,
            filter: "brightness(1.4)",
            boxShadow: "0 6px 20px rgba(255,255,255,0.8)",
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}

export default function About() {
  // Track mouse movement for parallax effects.
  const [offset, setOffset] = useState<Offset>({ x: 0, y: 0 })

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const x = (e.clientX / window.innerWidth - 0.5) * 30
    const y = (e.clientY / window.innerHeight - 0.5) * 30
    setOffset({ x, y })
  }

  return (
    <motion.main
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-800 pt-32 pb-12 overflow-hidden"
    >
      {/* Combine circular and hexagon shapes for a layered 3D background */}
      <FloatingShapes offset={offset} />
      <FloatingHexagons offset={offset} />

      {/* Main content with a glassy overlay and subtle parallax */}
      <div
        className="relative container mx-auto px-4 max-w-2xl z-10"
        style={{ transform: `translate3d(${offset.x / 10}px, ${offset.y / 10}px, 0)` }}
      >
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl sm:text-5xl font-bold mb-12 text-center"
        >
          About
        </motion.h1>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="bg-white/80 backdrop-blur-lg rounded-lg p-8 shadow-lg"
        >
          <p className="text-xl leading-relaxed mb-4">
            I'm a creative developer focused on building beautiful digital experiences. With a background in both design
            and development, I bring a unique perspective to every project I work on.
          </p>
          <p className="text-xl leading-relaxed mb-4">
            My work spans from interactive websites to digital installations, always with a focus on animation and user
            experience.
          </p>
          <p className="text-xl leading-relaxed">
            I believe that design and functionality should work together seamlessly, pushing the boundaries of creativity
            and technology.
          </p>
        </motion.div>
      </div>
    </motion.main>
  )
}
