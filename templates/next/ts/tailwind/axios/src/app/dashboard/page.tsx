"use client";

import AuthGuard from "@/components/AuthGuard";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.replace("/login");
  };

  return (
    <AuthGuard>
      <div className="p-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Dashboard</h1>

          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded"
          >
            Logout
          </button>
        </div>

        <p className="mt-4 text-gray-600">Protected dashboard content</p>
      </div>
    </AuthGuard>
  );
}
