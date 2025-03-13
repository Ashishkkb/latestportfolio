"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "../../components/UserProvider";
import { supabase } from "../../lib/supabase";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Checkbox } from "../../components/ui/checkbox";
import { useToast } from "../../components/ui/use-toast";

import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-markup";
import "prismjs/themes/prism.css";

export default function Upload() {
  const { user, loading } = useUser();
  const router = useRouter();
  const { toast } = useToast();

  const [title, setTitle] = useState("");
  const [isPaid, setIsPaid] = useState(false);
  const [price, setPrice] = useState("");
  const [deployedUrl, setDeployedUrl] = useState("");
  const [mode, setMode] = useState<"snippet" | "github" | "file">("github");
  const [codeSnippet, setCodeSnippet] = useState("");
  const [repoUrl, setRepoUrl] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [showPreview, setShowPreview] = useState(false);
  const [showLivePreview, setShowLivePreview] = useState(false);

  useEffect(() => {
    if (mode === "snippet" && codeSnippet.trim() !== "") {
      const blob = new Blob([codeSnippet], { type: "text/html" });
      const url = URL.createObjectURL(blob);
      setPreviewUrl(url);
      return () => URL.revokeObjectURL(url);
    } else if (mode === "file" && file) {
      const ext = file.name.split(".").pop()?.toLowerCase();
      if (ext === "html") {
        const url = URL.createObjectURL(file);
        setPreviewUrl(url);
        return () => URL.revokeObjectURL(url);
      }
      setPreviewUrl(null);
    } else {
      setPreviewUrl(null);
    }
  }, [mode, codeSnippet, file]);

  if (loading) return <div className="pt-24 text-center">Loading...</div>;
  if (!user) {
    router.push("/auth");
    return null;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      (mode === "snippet" && codeSnippet.trim() === "") ||
      (mode === "github" && (repoUrl.trim() === "" || deployedUrl.trim() === "")) ||
      (mode === "file" && (!file || deployedUrl.trim() === ""))
    ) {
      toast({
        title: "Error",
        description: "Please provide valid content for your upload.",
        variant: "destructive",
      });
      return;
    }

    try {
      let filePath = null;
      let livePreviewUrl = null;
      let codePreviewUrl = null;

      if (mode === "snippet") {
        const blob = new Blob([codeSnippet], { type: "text/html" });
        const snippetFile = new File([blob], "snippet.html", { type: "text/html" });
        const fileName = `${Math.random()}.html`;
        const { data, error } = await supabase.storage
          .from("ui-uploads")
          .upload(fileName, snippetFile);
        if (error) throw error;
        filePath = data.path;
        livePreviewUrl = URL.createObjectURL(snippetFile);
        codePreviewUrl = livePreviewUrl;
      } else if (mode === "github") {
        livePreviewUrl = deployedUrl;
        codePreviewUrl = deployedUrl;
      } else if (mode === "file") {
        const fileExt = file?.name.split(".").pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const { data, error } = await supabase.storage
          .from("ui-uploads")
          .upload(fileName, file!);
        if (error) throw error;
        filePath = data.path;
        livePreviewUrl = deployedUrl;
        codePreviewUrl = deployedUrl;
      }

      const { error: uploadError } = await supabase.from("ui_uploads").insert({
        user_id: user.id,
        title: title,
        live_preview_url: livePreviewUrl || null,
        code_preview_url: codePreviewUrl || null,
        deployed_url: mode === "snippet" ? livePreviewUrl : deployedUrl || null,
        file_path: filePath,
        is_paid: isPaid,
        price: isPaid ? Number.parseFloat(price) : null,
      });

      if (uploadError) throw uploadError;

      toast({
        title: "Success",
        description: "UI uploaded successfully!",
      });
      router.push("/dashboard");
    } catch (error) {
      if (error instanceof Error) {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        });
      }
    }
  };

  const finalPreviewUrl = mode === "snippet" ? previewUrl : deployedUrl;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 pt-24 pb-8">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto bg-white shadow-lg border border-gray-200 rounded-xl p-8">
          <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">Upload UI</h1>
          <div className="flex justify-center space-x-4 mb-8">
            {["snippet", "github", "file"].map((m) => (
              <Button
                key={m}
                variant={mode === m ? "default" : "outline"}
                onClick={() => setMode(m as "snippet" | "github" | "file")}
              >
                {m.charAt(0).toUpperCase() + m.slice(1)}
              </Button>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">UI Title</label>
              <Input
                type="text"
                placeholder="Enter UI Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="bg-white/90"
              />
            </div>
            {mode === "github" && (
              <>
                <div>
                  <label className="block text-gray-700 mb-2">
                    GitHub Repo URL{" "}
                    <span className="text-sm text-gray-500">
                      (Public or via OAuth for private repos)
                    </span>
                  </label>
                  <Input
                    type="url"
                    placeholder="https://github.com/your-repo"
                    value={repoUrl}
                    onChange={(e) => setRepoUrl(e.target.value)}
                    required
                    className="bg-white/90"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    Deployed URL{" "}
                    <span className="text-sm text-gray-500">
                      (URL where your project is hosted)
                    </span>
                  </label>
                  <Input
                    type="url"
                    placeholder="https://your-deployed-site.com"
                    value={deployedUrl}
                    onChange={(e) => setDeployedUrl(e.target.value)}
                    required
                    className="bg-white/90"
                  />
                </div>
              </>
            )}
            {mode === "file" && (
              <>
                <div>
                  <label className="block text-gray-700 mb-2">
                    Upload File{" "}
                    <span className="text-sm text-gray-500">(ZIP, HTML, etc.)</span>
                  </label>
                  <Input
                    type="file"
                    onChange={(e) => setFile(e.target.files?.[0] || null)}
                    className="bg-white/90"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    Deployed URL{" "}
                    <span className="text-sm text-gray-500">(URL where your project is hosted)</span>
                  </label>
                  <Input
                    type="url"
                    placeholder="https://your-deployed-site.com"
                    value={deployedUrl}
                    onChange={(e) => setDeployedUrl(e.target.value)}
                    required
                    className="bg-white/90"
                  />
                </div>
              </>
            )}
            {mode === "snippet" && (
              <div>
                <label className="block text-gray-700 mb-2">
                  Code Snippet (HTML/JSX/CSS/JS)
                </label>
                <Editor
                  value={codeSnippet}
                  onValueChange={(code) => setCodeSnippet(code)}
                  highlight={(code) => highlight(code, languages.jsx, "jsx")}
                  padding={10}
                  style={{
                    fontFamily: '"Fira Code", monospace',
                    fontSize: 14,
                    backgroundColor: "#f5f5f5",
                    border: "1px solid #e5e7eb",
                    borderRadius: "0.375rem",
                    minHeight: "200px",
                  }}
                />
              </div>
            )}
            <div className="flex items-center space-x-3">
              <Checkbox
                id="isPaid"
                checked={isPaid}
                onCheckedChange={(checked) => setIsPaid(checked as boolean)}
              />
              <label htmlFor="isPaid" className="text-gray-700">
                Paid UI
              </label>
            </div>
            {isPaid && (
              <div>
                <label className="block text-gray-700 mb-2">Price ($)</label>
                <Input
                  type="number"
                  placeholder="Enter Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                  className="bg-white/90"
                />
              </div>
            )}
            <div className="flex items-center justify-between">
              <Button type="submit">Upload</Button>
              {(mode === "snippet" || mode === "github" || mode === "file") && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowPreview((prev) => !prev)}
                >
                  {showPreview ? "Hide Preview" : "Show Preview"}
                </Button>
              )}
            </div>
          </form>

          {mode === "snippet" && (
            <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-lg text-sm">
              <span className="font-medium text-gray-800">Deployed URL: </span>
              {previewUrl ? (
                <a
                  href={previewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {previewUrl}
                </a>
              ) : (
                <span className="text-gray-600">N/A</span>
              )}
            </div>
          )}

          {showPreview && (
            <div className="mt-8 p-4 bg-gray-50 border border-gray-200 rounded-lg space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800">Preview</h2>
              {finalPreviewUrl ? (
                <div>
                  <iframe
                    src={finalPreviewUrl}
                    className="w-full h-80 border rounded-lg"
                    title="Live Preview"
                  />
                  <div className="mt-4 flex justify-end">
                    <Button variant="outline" onClick={() => setShowLivePreview(true)}>
                      Open Live Preview
                    </Button>
                  </div>
                </div>
              ) : (
                <p className="text-gray-600">
                  {mode === "file"
                    ? "No live preview available for this file type."
                    : "No preview available."}
                </p>
              )}
            </div>
          )}
        </div>
      </div>

      {showLivePreview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white rounded-lg overflow-hidden w-full max-w-4xl relative">
            <button
              onClick={() => setShowLivePreview(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            >
              Close
            </button>
            <iframe
              src={finalPreviewUrl || ""}
              className="w-full h-[80vh]"
              title="Live Preview Modal"
            />
          </div>
        </div>
      )}
    </div>
  );
}
