"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import VerifyOtpModal from "../../components/VerifyOtpModal";

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
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-96 p-6 bg-white shadow rounded">
          <h2 className="text-xl font-bold mb-4 text-black">Login</h2>

          <input className="border w-full p-2 mb-2" placeholder="Email" />
          <input
            className="border w-full p-2 mb-4"
            placeholder="Password"
            type="password"
          />

          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 text-white py-2 rounded"
          >
            Login
          </button>

          <p
            className="text-sm text-blue-600 mt-4 cursor-pointer"
            onClick={() => router.push("/signup")}
          >
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
