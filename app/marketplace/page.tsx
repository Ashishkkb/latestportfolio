"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { templates, MarketplaceItem , components} from "../../data/templatesData";




export default function Marketplace(): JSX.Element {
  const [activeTab, setActiveTab] = useState<"components" | "templates">(
    "components"
  );
  const [selectedItem, setSelectedItem] = useState<MarketplaceItem | null>(
    null
  );

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
          className="text-4xl font-bold mb-12 text-center"
        >
          Marketplace
        </motion.h1>

        <div className="flex justify-center mb-8 space-x-2">
          <button
            className={`px-4 py-2 rounded-l-lg ${
              activeTab === "components" ? "bg-blue-500" : "bg-gray-700"
            }`}
            onClick={() => setActiveTab("components")}
          >
            Components
          </button>
          <button
            className={`px-4 py-2 rounded-r-lg ${
              activeTab === "templates" ? "bg-blue-500" : "bg-gray-700"
            }`}
            onClick={() => setActiveTab("templates")}
          >
            Templates
          </button>
        </div>

        <motion.section
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
            hidden: {},
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {(activeTab === "components" ? components : templates).map((item) => (
            <motion.div
              key={item.name}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="bg-white/10 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transform transition duration-300 hover:-translate-y-1"
            >
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                <p className="text-gray-300 mb-4">Price: {item.price}</p>
                {/* Render the demo as a component */}
                {<item.demo />}
              </div>
              <div className="p-4 bg-gray-800 text-center">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                  onClick={() => setSelectedItem(item)}
                >
                  View Code
                </button>
              </div>
            </motion.div>
          ))}
        </motion.section>
      </div>

      {selectedItem && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="bg-gray-800 rounded-lg max-w-3xl w-full max-h-[80vh] overflow-auto"
          >
            <div className="p-4 border-b border-gray-700 flex justify-between items-center">
              <h3 className="text-xl font-bold">{selectedItem.name} Code</h3>
              <button
                className="text-gray-400 hover:text-white"
                onClick={() => setSelectedItem(null)}
              >
                Close
              </button>
            </div>
            <div className="p-4">
              <SyntaxHighlighter language="jsx" style={atomDark}>
                {selectedItem.code}
              </SyntaxHighlighter>
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.main>
  );
}
