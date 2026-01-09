"use client";

import { axiosApi } from "@/api/axios";
import { useState } from "react";
import "./VerifyOtpModal.scss";

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
    // const res = await axiosApi.post("/auth/verify-otp", {
    //   refId,
    //   otp,
    // });

    onSuccess("dummy Token");
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Verify OTP</h2>

        <input
          className="modal-input"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />

        <div className="modal-actions">
          <button onClick={onClose} className="btn-cancel">
            Cancel
          </button>

          <button onClick={handleVerify} className="btn-verify">
            Verify
          </button>
        </div>
      </div>
    </div>
  );
}
