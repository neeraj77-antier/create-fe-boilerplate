"use client";

import AuthGuard from "@/components/AuthGuard";
import { useRouter } from "next/navigation";
import "./Dashboard.scss";

export default function DashboardPage() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.replace("/login");
  };

  return (
    <AuthGuard>
      <div className="dashboard-wrapper">
        <div className="dashboard-header">
          <h1>Dashboard</h1>

          <button onClick={handleLogout} className="btn-logout">
            Logout
          </button>
        </div>

        <p className="dashboard-content">Protected dashboard content</p>
      </div>
    </AuthGuard>
  );
}
