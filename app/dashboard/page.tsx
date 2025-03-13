"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "../../components/UserProvider";
import { supabase } from "../../lib/supabase";
import { Button } from "../../components/ui/button";
import { useToast } from "../../components/ui/use-toast";

interface UIUpload {
  id: number;
  title: string;
  views: number;
  is_paid: boolean;
  created_at: string;
}

export default function Dashboard() {
  const { user, loading } = useUser();
  const router = useRouter();
  const [uiUploads, setUiUploads] = useState<UIUpload[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/auth");
    } else if (user) {
      fetchUiUploads();
    }
  }, [user, loading, router]);

  const fetchUiUploads = async () => {
    const { data, error } = await supabase
      .from("ui_uploads")
      .select("*")
      .eq("user_id", user?.id)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching UI uploads:", error);
      toast({
        title: "Error",
        description: "Failed to fetch UI uploads",
        variant: "destructive",
      });
    } else {
      setUiUploads(data || []);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/auth");
  };

  if (loading) {
    return <div className="pt-24 text-center">Loading...</div>;
  }

  if (!user) {
    return null;
  }

  // Summary stats calculations
  const totalUploads = uiUploads.length;
  const totalViews = uiUploads.reduce((sum, upload) => sum + upload.views, 0);
  const paidUploads = uiUploads.filter((upload) => upload.is_paid).length;
  const freeUploads = totalUploads - paidUploads;

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
            <p className="text-gray-600 mt-1">
              Welcome, {user.email} – manage your UI templates and code assets.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button onClick={handleSignOut} variant="outline">
              Sign Out
            </Button>
          </div>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-sm font-medium text-gray-500">Total Uploads</h2>
            <p className="mt-2 text-2xl font-semibold text-gray-800">
              {totalUploads}
            </p>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-sm font-medium text-gray-500">Total Views</h2>
            <p className="mt-2 text-2xl font-semibold text-gray-800">
              {totalViews}
            </p>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-sm font-medium text-gray-500">Paid Uploads</h2>
            <p className="mt-2 text-2xl font-semibold text-gray-800">
              {paidUploads}
            </p>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-sm font-medium text-gray-500">Free Uploads</h2>
            <p className="mt-2 text-2xl font-semibold text-gray-800">
              {freeUploads}
            </p>
          </div>
        </div>

        {/* Uploads Table */}
        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Your UI Uploads
            </h2>
            <Button onClick={() => router.push("/upload")}>
              Upload New UI
            </Button>
          </div>
          {totalUploads === 0 ? (
            <p className="text-gray-600">You haven't uploaded any UIs yet.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                      Title
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                      Views
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                      Type
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                      Uploaded On
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {uiUploads.map((upload) => (
                    <tr key={upload.id}>
                      <td className="px-4 py-2 whitespace-nowrap text-gray-800">
                        {upload.title}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-gray-800">
                        {upload.views}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-gray-800">
                        {upload.is_paid ? "Paid" : "Free"}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-gray-800">
                        {new Date(upload.created_at).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Additional Section: Recent Activity */}
        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Recent Activity
          </h2>
          <p className="text-gray-600">
            {/* You can integrate your activity log or notifications here */}
            No recent activity.
          </p>
        </div>

        {/* Quick Links / Extra Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Manage Profile
            </h3>
            <p className="text-gray-600 mb-4">
              Update your profile and settings.
            </p>
            <Button onClick={() => router.push("/profile")}>
              Go to Profile
            </Button>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Analytics
            </h3>
            <p className="text-gray-600 mb-4">
              Dive deep into your uploads' performance.
            </p>
            <Button onClick={() => router.push("/analytics")}>
              View Analytics
            </Button>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Earnings
            </h3>
            <p className="text-gray-600 mb-4">
              Monitor your revenue from paid uploads.
            </p>
            <Button onClick={() => router.push("/earnings")}>
              View Earnings
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
