"use client";

import { useState } from "react";

interface VerifyOtpModalProps {
  isOpen: boolean;
  refId: string;
  onClose: () => void;
  onSuccess: (token: string) => void;
}

export default function VerifyOtpModal({
  isOpen,
  refId,
  onClose,
  onSuccess,
}: VerifyOtpModalProps) {
  const [otp, setOtp] = useState("");

  if (!isOpen) return null;

  const handleVerify = async () => {
    // 🔴 replace with axios call later
    const fakeToken = "dummy-token";
    onSuccess(fakeToken);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white w-96 p-6 rounded shadow">
        <h2 className="text-xl font-bold mb-4 text-black">Verify OTP</h2>

        <input
          className="border-1 border-gray-300 w-full p-2 mb-4 text-black"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />

        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded text-black"
          >
            Cancel
          </button>

          <button
            onClick={handleVerify}
            className="px-4 py-2 bg-green-600 text-white rounded"
          >
            Verify
          </button>
        </div>
      </div>
    </div>
  );
}
