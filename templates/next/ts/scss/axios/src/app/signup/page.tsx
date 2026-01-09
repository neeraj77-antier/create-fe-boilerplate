"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import VerifyOtpModal from "@/components/VerifyOtpModal";
import "./Signup.scss";

export default function SignupPage() {
  const router = useRouter();
  const [showOtp, setShowOtp] = useState(false);
  const [refId, setRefId] = useState("");

  const handleSignup = async () => {
    setRefId("ref-456");
    setShowOtp(true);
  };

  return (
    <>
      <div className="auth-wrapper">
        <div className="auth-card">
          <h2>Signup</h2>

          <input placeholder="Email" />
          <input placeholder="Password" type="password" />

          <button onClick={handleSignup}>Signup</button>
          <p className="auth-link" onClick={() => router.push("/login")}>
            Already have an Account? Login
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
