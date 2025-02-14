"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Text } from "@react-three/drei"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism"

function Carousel() {
  return (
    <group>
      {[0, 1, 2, 3, 4].map((index) => (
        <group key={index} rotation={[0, (index / 5) * Math.PI * 2, 0]} position={[3, 0, 0]}>
          <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={`hsl(${index * 60}, 100%, 50%)`} />
          </mesh>
          <Text position={[0, 1.5, 0]} fontSize={0.5} color="white">
            Item {index + 1}
          </Text>
        </group>
      ))}
    </group>
  )
}

export default function CarouselComponent() {
  const [showCode, setShowCode] = useState(false)

  const codeString = `
function Carousel() {
  return (
    <group>
      {[0, 1, 2, 3, 4].map((index) => (
        <group key={index} rotation={[0, (index / 5) * Math.PI * 2, 0]} position={[3, 0, 0]}>
          <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={\`hsl(\${index * 60}, 100%, 50%)\`} />
          </mesh>
          <Text position={[0, 1.5, 0]} fontSize={0.5} color="white">
            Item {index + 1}
          </Text>
        </group>
      ))}
    </group>
  )
}
  `

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-[#020410] to-[#090b1f] text-white pt-32"
    >
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">3D Carousel Component</h1>
        <div className="mb-8 h-[400px]">
          <Canvas camera={{ position: [0, 0, 10] }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Carousel />
            <OrbitControls />
          </Canvas>
        </div>
        <button
          onClick={() => setShowCode(!showCode)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {showCode ? "Hide Code" : "View Code"}
        </button>
        {showCode && (
          <div className="mt-8">
            <SyntaxHighlighter language="jsx" style={atomDark}>
              {codeString}
            </SyntaxHighlighter>
          </div>
        )}
      </div>
    </motion.main>
  )
}

