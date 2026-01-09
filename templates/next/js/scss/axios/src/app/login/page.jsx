"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import "./Login.scss";
import VerifyOtpModal from "@/components/VerifyOtpModal";
import { loginApi } from "@/api/auth";


export default function LoginPage() {
  const router = useRouter();
  const [showOtp, setShowOtp] = useState(false);
  const [refId, setRefId] = useState("");

  const handleLogin = async () => {
    // 🔴 simulate API response
    // await loginApi({
    //   email: "",
    //   password: "",
    // });

    const requiresOtp = true;

    if (requiresOtp) {
      setRefId("ref-123");
      setShowOtp(true);
      return;
    }

    router.push("/dashboard");
  };

  return (
    <>
      <div className="auth-wrapper">
        <div className="auth-card">
          <h2>Login</h2>

          <input placeholder="Email" />
          <input placeholder="Password" type="password" />

          <button onClick={handleLogin}>Login</button>

          <p className="auth-link" onClick={() => router.push("/signup")}>
            Don’t have an account? Signup
          </p>
        </div>
      </div>

      <VerifyOtpModal
        isOpen={showOtp}
        refId={refId}
        onClose={() => setShowOtp(false)}
        onSuccess={(token) => {
          localStorage.setItem("token", token);
          router.push("/dashboard");
        }}
      />
    </>
  );
}
