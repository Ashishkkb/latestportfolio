"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { FaReact, FaNodeJs, FaPython, FaAws, FaDocker } from "react-icons/fa"
import { SiTensorflow, SiPytorch, SiKubernetes } from "react-icons/si"

const projects = [
  {
    title: "AI-Powered Chat Assistant",
    description: "Developed a sophisticated chat assistant using advanced NLP techniques and machine learning models.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["NLP", "Machine Learning", "Python", "TensorFlow"],
  },
  {
    title: "VR Educational Platform",
    description: "Created an immersive VR platform for interactive learning experiences, focusing on STEM subjects.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["VR", "Unity", "C#", "Educational Tech"],
  },
  {
    title: "Blockchain-based Supply Chain",
    description:
      "Implemented a transparent and secure supply chain system using blockchain technology for improved traceability.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Blockchain", "Ethereum", "Smart Contracts", "Web3"],
  },
  {
    title: "Serverless Microservices Architecture",
    description: "Designed and implemented a scalable serverless architecture for a high-traffic e-commerce platform.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["AWS Lambda", "Microservices", "Node.js", "DynamoDB"],
  },
]

const skills = [
  { name: "React", icon: FaReact, color: "text-blue-400" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
  { name: "Python", icon: FaPython, color: "text-yellow-300" },
  { name: "AWS", icon: FaAws, color: "text-orange-400" },
  { name: "Docker", icon: FaDocker, color: "text-blue-500" },
  { name: "TensorFlow", icon: SiTensorflow, color: "text-orange-500" },
  { name: "PyTorch", icon: SiPytorch, color: "text-red-500" },
  { name: "Kubernetes", icon: SiKubernetes, color: "text-blue-600" },
]

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null)

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
          className="text-4xl font-bold mb-12"
        >
          Portfolio
        </motion.h1>

        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <div key={skill.name} className="flex items-center space-x-2 bg-white/10 rounded-lg p-3">
                <skill.icon className={`text-2xl ${skill.color}`} />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
          <h2 className="text-2xl font-bold mb-6">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/10 rounded-lg overflow-hidden cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="bg-blue-500 text-xs text-white px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-lg max-w-3xl w-full max-h-[80vh] overflow-auto">
            <div className="p-4 border-b border-gray-700 flex justify-between items-center">
              <h3 className="text-xl font-bold">{selectedProject.title}</h3>
              <button className="text-gray-400 hover:text-white" onClick={() => setSelectedProject(null)}>
                Close
              </button>
            </div>
            <div className="p-4">
              <Image
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                width={800}
                height={600}
                className="w-full h-auto rounded-lg mb-4"
              />
              <p className="text-gray-300 mb-4">{selectedProject.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.tags.map((tag) => (
                  <span key={tag} className="bg-blue-500 text-xs text-white px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                View Project
              </button>
            </div>
          </div>
        </div>
      )}
    </motion.main>
  )
}

