"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { FaReact, FaNodeJs, FaPython, FaAws, FaDocker } from "react-icons/fa";
import { SiTensorflow, SiPytorch, SiKubernetes } from "react-icons/si";

// -------------------------------------
// Data Interfaces
// -------------------------------------
interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
}

const projects: Project[] = [
  {
    title: "AI-Powered Chat Assistant",
    description:
      "A sophisticated chat assistant using NLP and deep learning models.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["NLP", "Machine Learning", "Python", "TensorFlow"],
    liveUrl: "https://live-ai-chat.example.com",
  },
  {
    title: "VR Educational Platform",
    description:
      "An immersive VR platform for interactive STEM learning experiences.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["VR", "Unity", "C#", "EdTech"],
    liveUrl: "https://vr-edu.example.com",
  },
  {
    title: "Blockchain-based Supply Chain",
    description:
      "A transparent and secure supply chain system using blockchain technology.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Blockchain", "Ethereum", "Smart Contracts", "Web3"],
    liveUrl: "https://supplychain.example.com",
  },
  {
    title: "Serverless Microservices Architecture",
    description:
      "A scalable, serverless architecture for a high-traffic e-commerce platform.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["AWS Lambda", "Microservices", "Node.js", "DynamoDB"],
    liveUrl: "https://serverless-shop.example.com",
  },
];

const skills = [
  { name: "React", icon: FaReact, color: "text-blue-400" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
  { name: "Python", icon: FaPython, color: "text-yellow-300" },
  { name: "AWS", icon: FaAws, color: "text-orange-400" },
  { name: "Docker", icon: FaDocker, color: "text-blue-500" },
  { name: "TensorFlow", icon: SiTensorflow, color: "text-orange-500" },
  { name: "PyTorch", icon: SiPytorch, color: "text-red-500" },
  { name: "Kubernetes", icon: SiKubernetes, color: "text-blue-600" },
];

// -------------------------------------
// Markdown Table Data (enhanced styling)
// -------------------------------------
const projectsMarkdown = `
| **Project Title**                         | **Live Preview**                                                          | **Technologies**                        |
| ----------------------------------------- | ------------------------------------------------------------------------- | --------------------------------------- |
| AI-Powered Chat Assistant                 | [Live](https://live-ai-chat.example.com)                                  | NLP, Python, TensorFlow                 |
| VR Educational Platform                   | [Live](https://vr-edu.example.com)                                          | VR, Unity, C#                           |
| Blockchain-based Supply Chain             | [Live](https://supplychain.example.com)                                     | Blockchain, Ethereum, Web3              |
| Serverless Microservices Architecture     | [Live](https://serverless-shop.example.com)                               | AWS Lambda, Node.js, DynamoDB           |
`;

// -------------------------------------
// Portfolio Page Component
// -------------------------------------
export default function Portfolio() {
  // State for modal: selected project and active tab ("overview" or "live")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalTab, setModalTab] = useState<"overview" | "live">("overview");

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-800 pt-32 pb-12 overflow-hidden"
    >
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-16">
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-5xl font-extrabold text-center"
        >
          Welcome to My Portfolio
        </motion.h1>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-4 text-center text-xl text-gray-600 max-w-3xl mx-auto"
        >
          I build advanced digital products combining AI, VR, Blockchain, and modern web technologies.
        </motion.p>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4 mb-16">
        <motion.h2
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center gap-2 bg-white shadow-md rounded-lg p-4"
            >
              <skill.icon className={`text-3xl ${skill.color}`} />
              <span className="font-medium">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-4 mb-16">
        <motion.h2
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition-all cursor-pointer"
              onClick={() => {
                setSelectedProject(project);
                setModalTab("overview");
              }}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
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
      </section>

      {/* Live Projects Section */}
      <section className="container mx-auto px-4 mb-16">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Live Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) =>
            project.liveUrl ? (
              <motion.div
                key={project.title}
                whileHover={{ scale: 1.05 }}
                className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:-translate-y-1 transition-all cursor-pointer"
                onClick={() => {
                  setSelectedProject(project);
                  setModalTab("live");
                }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-700 mb-2">{project.description}</p>
                  <span className="inline-block bg-green-500 text-xs text-white px-2 py-1 rounded">
                    Live Preview
                  </span>
                </div>
              </motion.div>
            ) : null
          )}
        </div>
      </section>

      {/* Markdown Table Section */}
      <section className="container mx-auto px-4 mb-16">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Projects Overview
        </motion.h2>
        <div className="bg-white shadow rounded-lg p-6">
          <ReactMarkdown
            components={{
              table: ({ node, ...props }) => (
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse" {...props} />
                </div>
              ),
              th: ({ node, ...props }) => (
                <th className="border px-4 py-2 bg-gray-200 text-left" {...props} />
              ),
              td: ({ node, ...props }) => (
                <td className="border px-4 py-2" {...props} />
              ),
            }}
          >
            {projectsMarkdown}
          </ReactMarkdown>
        </div>
      </section>

      {/* Modal for Selected Project */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
            {/* Modal Header with Tabs */}
            <div className="flex border-b border-gray-200">
              <button
                onClick={() => setModalTab("overview")}
                className={`flex-1 p-4 text-center font-semibold ${
                  modalTab === "overview" ? "border-b-4 border-blue-500" : "text-gray-600"
                }`}
              >
                Overview
              </button>
              {selectedProject.liveUrl && (
                <button
                  onClick={() => setModalTab("live")}
                  className={`flex-1 p-4 text-center font-semibold ${
                    modalTab === "live" ? "border-b-4 border-blue-500" : "text-gray-600"
                  }`}
                >
                  Live Preview
                </button>
              )}
            </div>
            <div className="p-4">
              {modalTab === "overview" && (
                <>
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    width={800}
                    height={600}
                    className="w-full h-auto rounded-lg mb-4"
                  />
                  <p className="text-gray-700 mb-4">{selectedProject.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedProject.tags.map((tag) => (
                      <span key={tag} className="bg-blue-500 text-xs text-white px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => setModalTab("live")}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                  >
                    View Live Project
                  </button>
                </>
              )}
              {modalTab === "live" && selectedProject.liveUrl && (
                <iframe
                  src={selectedProject.liveUrl}
                  title={selectedProject.title}
                  className="w-full h-[600px] rounded-lg border"
                />
              )}
            </div>
            <div className="p-4 border-t border-gray-200 flex justify-end">
              <button
                className="text-gray-600 hover:text-gray-800"
                onClick={() => setSelectedProject(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </motion.main>
  );
}
