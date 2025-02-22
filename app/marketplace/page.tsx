"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import {
  templates,
  type MarketplaceItem,
  components,
} from "../../data/templatesData";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { useUser } from "@/components/UserProvider";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";

interface UIUpload {
  id: number;
  title: string;
  views: number;
  is_paid: boolean;
  price: number | null;
  user_id: string;
}

export default function Marketplace(): JSX.Element {
  const [activeTab, setActiveTab] = useState<"components" | "templates">(
    "components"
  );
  const [selectedItem, setSelectedItem] = useState<MarketplaceItem | null>(
    null
  );
  const { user, loading } = useUser();
  const router = useRouter();
  const [uiUploads, setUiUploads] = useState<UIUpload[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    fetchUiUploads();
  }, []);

  const fetchUiUploads = async () => {
    const { data, error } = await supabase.from("ui_uploads").select("*");

    if (error) {
      console.error("Error fetching UI uploads:", error);
      toast({
        title: "Error",
        description: "Failed to fetch UI uploads",
        variant: "destructive",
      });
    } else {
      setUiUploads(data);
    }
  };

  const handleView = async (uiId: number) => {
    // Increment view count
    const { error } = await supabase.rpc("increment_views", { ui_id: uiId });
    if (error) {
      console.error("Error incrementing views:", error);
    } else {
      // Refresh UI uploads
      fetchUiUploads();
    }
  };

  const handlePurchase = async (uiId: number) => {
    // Here you would implement your payment logic
    // For now, we'll just simulate a successful purchase
    toast({
      title: "Success",
      description: "UI purchased successfully!",
    });
  };

  if (loading) return <div>Loading...</div>;

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-[#020410] to-[#090b1f] text-white pt-32"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {uiUploads.map((ui) => (
          <div key={ui.id} className="border p-4 rounded-lg">
            <h2 className="text-xl font-semibold">{ui.title}</h2>
            <p>Views: {ui.views}</p>
            <p>{ui.is_paid ? `Price: $${ui.price}` : "Free"}</p>
            <div className="mt-2">
              <Button onClick={() => handleView(ui.id)} className="mr-2">
                View
              </Button>
              {ui.is_paid && ui.user_id !== user?.id && (
                <Button onClick={() => handlePurchase(ui.id)}>Purchase</Button>
              )}
            </div>
          </div>
        ))}
      </div>
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
