"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import VerifyOtpModal from "@/components/VerifyOtpModal";

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
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-96 p-6 bg-white shadow rounded">
          <h2 className="text-xl font-bold mb-4 text-black">Signup</h2>

          <input className="border w-full p-2 mb-2" placeholder="Email" />
          <input
            className="border w-full p-2 mb-4"
            placeholder="Password"
            type="password"
          />

          <button
            onClick={handleSignup}
            className="w-full bg-blue-600 text-white py-2 rounded"
          >
            Signup
          </button>
          <p
            className="text-sm text-blue-600 mt-4 cursor-pointer"
            onClick={() => router.push("/login")}
          >
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
