"use client"

import { motion } from "framer-motion"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Stars, Text3D, Center } from "@react-three/drei"
import { useEffect, useState, useRef } from "react"
import * as THREE from "three"
import Link from "next/link"

// --- Interactive Planet Component (Without Texture) --- //
function Planet({
  position,
  size,
  color,
  speed,
}: { position: [number, number, number]; size: number; color: string; speed: number }) {
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += speed
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

// --- Floating Cubes Component --- //
function FloatingCubes() {
  const group = useRef<THREE.Group>(null!)
  const cubes = useRef<THREE.Mesh[]>([])

  useEffect(() => {
    for (let i = 0; i < 50; i++) {
      const cube = new THREE.Mesh(
        new THREE.BoxGeometry(0.2, 0.2, 0.2),
        new THREE.MeshStandardMaterial({ color: new THREE.Color().setHSL(Math.random(), 0.7, 0.5) }),
      )
      cube.position.set(Math.random() * 10 - 5, Math.random() * 10 - 5, Math.random() * 10 - 5)
      cubes.current.push(cube)
      group.current.add(cube)
    }
  }, [])

  useFrame((state) => {
    cubes.current.forEach((cube, i) => {
      cube.rotation.x += 0.01
      cube.rotation.y += 0.01
      cube.position.y += Math.sin(state.clock.elapsedTime + i) * 0.005
    })
  })

  return <group ref={group} />
}

// --- Animated Portfolio Text --- //
function AnimatedText() {
  const textRef = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    if (textRef.current) {
      textRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.2
    }
  })

  return (
    <Center position={[0, 2, 0]}>
      <Text3D
        ref={textRef}
        // Using the base Helvetiker font from Three.js examples
        font="https://threejs.org/examples/fonts/helvetiker_regular.typeface.json"
        size={0.5}
        height={0.2}
        curveSegments={12}
      >
        Portfolio
        <meshStandardMaterial color="white" emissive="#4a4a4a" />
      </Text3D>
    </Center>
  )
}

// --- Space Scene --- //
function SpaceScene() {
  return (
    <Canvas camera={{ position: [0, 0, 10] }}>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <FloatingCubes />
      <AnimatedText />
      <Planet position={[-4, -2, -5]} size={1} color="#ff9900" speed={0.01} />
      <Planet position={[4, 3, -8]} size={1.5} color="#00ffff" speed={0.005} />
    </Canvas>
  )
}

// --- Professional LoadingScreen Component --- //
export function LoadingScreen(): JSX.Element {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) return prev + 1
        clearInterval(interval)
        return 100
      })
    }, 30)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (progress === 100) {
      setIsComplete(true)
      setTimeout(() => setShowButton(true), 1000)
    }
  }, [progress])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-[#020410] to-[#090b1f]"
    >
      <div className="w-full max-w-md px-6 text-center space-y-6 relative z-10">
        {!isComplete && (
          <>
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="h-2 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full shadow-lg mt-10"
            />
            <motion.p
              className="text-white text-lg font-bold tracking-wide uppercase drop-shadow-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Exploring the Digital Universe {progress}%
            </motion.p>
          </>
        )}
        {isComplete && showButton && (
          <Link href="/home">
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
              transition={{ duration: 0.3 }}
              className="px-8 py-4 bg-white/10 text-white rounded-full shadow-xl backdrop-blur-md font-bold text-lg relative overflow-hidden mt-10"
            >
              <span className="relative z-10">Enter Ashish's Digital Realm</span>
              <motion.div
                initial={{ left: "-100%" }}
                animate={{ left: "100%" }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent w-1/2 h-full transform -skew-x-12"
              />
            </motion.button>
          </Link>
        )}
      </div>

      <div className="absolute inset-0 z-0">
        <SpaceScene />
      </div>

      {isComplete && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="absolute bottom-8 left-0 right-0 text-center text-white text-sm italic"
        >
          "The only way to discover the limits of the possible is to go beyond them into the impossible." - Arthur C.
          Clarke
        </motion.p>
      )}
    </motion.div>
  )
}

