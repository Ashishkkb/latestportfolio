"use client";

import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy as lightStyle } from "react-syntax-highlighter/dist/esm/styles/prism";
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

// ------------------------------------------------------------------
// TYPES
// ------------------------------------------------------------------
interface UIUpload {
  id: number;
  title: string;
  views: number;
  is_paid: boolean;
  price: number | null;
  user_id: string;
}

type SearchRecommendation = {
  name: string;
  type: "component" | "template" | "upload";
  item: MarketplaceItem | UIUpload;
};

// ------------------------------------------------------------------
// COMPONENT: Marketplace
// ------------------------------------------------------------------
export default function Marketplace(): JSX.Element {
  const [activeTab, setActiveTab] = useState<"components" | "templates">(
    "components"
  );
  const [selectedItem, setSelectedItem] = useState<MarketplaceItem | null>(
    null
  );
  const [uiUploads, setUiUploads] = useState<UIUpload[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showRecommendations, setShowRecommendations] = useState(false);
  const [hoveredRecommendation, setHoveredRecommendation] = useState<
    number | null
  >(null);

  const { user, loading } = useUser();
  const router = useRouter();
  const { toast } = useToast();

  // ------------------------------------------------------------------
  // DATA FETCH & SIDE EFFECTS
  // ------------------------------------------------------------------
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
    } else if (data) {
      setUiUploads(data);
    }
  };

  // ------------------------------------------------------------------
  // HANDLERS
  // ------------------------------------------------------------------
  const handleView = async (uiId: number) => {
    const { error } = await supabase.rpc("increment_views", { ui_id: uiId });
    if (error) {
      console.error("Error incrementing views:", error);
    } else {
      fetchUiUploads();
    }
  };

  const handlePurchase = async (uiId: number) => {
    toast({
      title: "Success",
      description: "UI purchased successfully!",
    });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setShowRecommendations(true);
  };

  const handleSearchSelect = (item: SearchRecommendation) => {
    setSearchTerm(item.name);
    setShowRecommendations(false);

    if (item.type === "upload") {
      document
        .getElementById("ui-uploads")
        ?.scrollIntoView({ behavior: "smooth" });
    } else if (item.type === "component") {
      setActiveTab("components");
      document
        .getElementById("marketplace-section")
        ?.scrollIntoView({ behavior: "smooth" });
    } else if (item.type === "template") {
      setActiveTab("templates");
      document
        .getElementById("marketplace-section")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showRecommendations) return;

    if (e.key === "ArrowDown") {
      setHoveredRecommendation((prev) => (prev === null ? 0 : prev + 1));
    } else if (e.key === "ArrowUp") {
      setHoveredRecommendation((prev) => (prev && prev > 0 ? prev - 1 : 0));
    } else if (
      e.key === "Enter" &&
      hoveredRecommendation !== null &&
      filteredRecommendations.length > 0
    ) {
      handleSearchSelect(filteredRecommendations[hoveredRecommendation]);
    }
  };

  // ------------------------------------------------------------------
  // DATA PREPARATION
  // ------------------------------------------------------------------
  const allItems: SearchRecommendation[] = [
    ...components.map(
      (c): SearchRecommendation => ({
        name: c.name,
        type: "component",
        item: c,
      })
    ),
    ...templates.map(
      (t): SearchRecommendation => ({
        name: t.name,
        type: "template",
        item: t,
      })
    ),
    ...uiUploads.map(
      (u): SearchRecommendation => ({
        name: u.title,
        type: "upload",
        item: u,
      })
    ),
  ];

  const filteredRecommendations = useMemo(() => {
    if (!searchTerm.trim()) return [];
    return allItems.filter((entry) =>
      entry.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, allItems]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900 flex pt-20">
      {/* LEFT SIDEBAR */}
      <aside className="hidden md:flex md:flex-col w-64 bg-white shadow-lg px-4 py-6 sticky top-20">
        <h2 className="text-2xl font-bold mb-6">Quick Navigation</h2>
        <nav className="space-y-4">
          <a
            href="#ui-uploads"
            className="block text-gray-700 hover:text-blue-600 transition-colors"
          >
            UI Uploads
          </a>
          <a
            href="#marketplace-section"
            className="block text-gray-700 hover:text-blue-600 transition-colors"
          >
            Marketplace
          </a>
          <a
            onClick={() => setActiveTab("components")}
            href="#marketplace-section"
            className="block text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
          >
            Components
          </a>
          <a
            onClick={() => setActiveTab("templates")}
            href="#marketplace-section"
            className="block text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
          >
            Templates
          </a>
        </nav>
      </aside>

      {/* MAIN CONTENT AREA */}
      <motion.main
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-1 pt-8 pb-16 px-4 md:px-8"
      >
        {/* SEARCH BAR */}
        <div className="relative mb-8 max-w-lg mx-auto md:mx-0">
          <label
            htmlFor="search"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Search
          </label>
          <input
            id="search"
            type="text"
            className="block w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            placeholder="Search components, templates, or UI uploads..."
            value={searchTerm}
            onChange={handleSearchChange}
            onFocus={() => setShowRecommendations(true)}
            onBlur={() => setTimeout(() => setShowRecommendations(false), 200)}
            onKeyDown={handleKeyDown}
          />
          {showRecommendations && filteredRecommendations.length > 0 && (
            <div className="absolute w-full bg-white border border-gray-200 shadow-md rounded-md mt-1 z-10">
              {filteredRecommendations.map((rec, index) => (
                <div
                  key={rec.name + rec.type}
                  className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                    hoveredRecommendation === index ? "bg-gray-100" : ""
                  }`}
                  onClick={() => handleSearchSelect(rec)}
                  onMouseEnter={() => setHoveredRecommendation(index)}
                >
                  {rec.name}
                  <span className="ml-2 text-xs text-gray-400">
                    {rec.type === "component"
                      ? "Component"
                      : rec.type === "template"
                      ? "Template"
                      : "UI Upload"}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* UI UPLOADS SECTION */}
        <section id="ui-uploads" className="mb-12">
          <h1 className="text-3xl font-bold text-center mb-6">UI Uploads</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {uiUploads.map((ui) => (
              <motion.div
                key={ui.id}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-lg shadow-lg p-4 flex flex-col hover:shadow-2xl transition-transform"
              >
                <div className="h-40 w-full bg-gray-200 rounded mb-4 flex items-center justify-center overflow-hidden">
                  {/* Improved UI preview on card */}
                  <motion.div
                    initial={{ opacity: 0.9 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-gray-500">
                      UI Preview: {ui.title}
                    </span>
                  </motion.div>
                </div>
                <h2 className="text-lg font-semibold">{ui.title}</h2>
                <p className="text-sm text-gray-500 mt-1">Views: {ui.views}</p>
                <p className="text-sm text-gray-500 mt-1">
                  {ui.is_paid ? `Price: $${ui.price}` : "Free"}
                </p>
                <div className="mt-4 flex space-x-2">
                  <Button variant="outline" onClick={() => handleView(ui.id)}>
                    View
                  </Button>
                  {ui.is_paid && ui.user_id !== user?.id && (
                    <Button onClick={() => handlePurchase(ui.id)}>
                      Purchase
                    </Button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* MARKETPLACE SECTION */}
        <section id="marketplace-section">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-3xl font-bold mb-8 text-center"
          >
            Marketplace
          </motion.h1>

          {/* Tabs */}
          <div className="flex justify-center mb-6 space-x-2">
            <button
              className={`px-4 py-2 rounded-l-lg transition-colors ${
                activeTab === "components"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
              onClick={() => setActiveTab("components")}
            >
              Components
            </button>
            <button
              className={`px-4 py-2 rounded-r-lg transition-colors ${
                activeTab === "templates"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
              onClick={() => setActiveTab("templates")}
            >
              Templates
            </button>
          </div>

          {/* Product Cards Grid */}
          <motion.section
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
              hidden: {},
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {(activeTab === "components" ? components : templates).map(
              (item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ scale: 1.03 }}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-transform p-4 flex flex-col"
                >
                  <div className="relative h-40 w-full bg-gray-200 rounded mb-4 flex items-center justify-center overflow-hidden">
                    {/* Show actual demo preview on card if available */}
                    {item.demo ? (
                      <motion.div
                        initial={{ scale: 0.95 }}
                        whileHover={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className="w-full h-full"
                      >
                        <item.demo />
                      </motion.div>
                    ) : (
                      <span className="text-gray-500">
                        No Preview Available
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 mt-1">Price: {item.price}</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Short description or tagline about the {item.name}.
                  </p>
                  <div className="mt-4">
                    <Button onClick={() => setSelectedItem(item)}>
                      View Details
                    </Button>
                  </div>
                </motion.div>
              )
            )}
          </motion.section>
        </section>
      </motion.main>

      {/* Modal for details & code snippet */}
      {selectedItem && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden"
          >
            {/* Modal Header */}
            <div className="p-4 border-b border-gray-300 flex justify-between items-center">
              <h3 className="text-2xl font-bold text-gray-800">
                {selectedItem.name} Details
              </h3>
              <button
                className="text-gray-500 hover:text-gray-800"
                onClick={() => setSelectedItem(null)}
              >
                Close
              </button>
            </div>

            {/* Modal Body (scrollable area) */}
            <div className="flex-1 overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Left: Preview */}
                <div className="p-4">
                  <h4 className="text-xl font-semibold text-gray-700 mb-2">
                    Preview
                  </h4>
                  <div className="border rounded-lg p-4">
                    <selectedItem.demo />
                  </div>
                </div>

                {/* Right: Code Snippet */}
                <div className="p-4 border-l border-gray-200">
                  <h4 className="text-xl font-semibold text-gray-700 mb-2">
                    Code Snippet
                  </h4>
                  <SyntaxHighlighter language="jsx" style={lightStyle}>
                    {selectedItem.code}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
