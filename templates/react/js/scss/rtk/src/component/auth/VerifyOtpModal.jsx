import { useState } from "react";
import { apiCallPost } from "../../api/axios";
import { toasts } from "../common/ui/Toast/Toast";
import "./VerifyOtpModal.scss";

const VerifyOtpModal = ({ isOpen, onClose, onVerifySuccess }) => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleVerify = async () => {
    if (otp.length !== 6) {
      toasts.error("Please enter a valid 6-digit OTP");
      return;
    }

    setLoading(true);

    // const res = await apiCallPost("/auth/verify-otp", { otp }, {}, true);

    setLoading(false);

    // if (res?.success) {
    onVerifySuccess();
    onClose();
    // }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="modal-title">Verify OTP</h2>

        <input
          maxLength={6}
          value={otp}
          onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
          className="otp-input"
          placeholder="Enter OTP"
        />

        <div className="modal-actions">
          <button onClick={onClose} className="btn-cancel">
            Cancel
          </button>

          <button
            onClick={handleVerify}
            disabled={loading}
            className="btn-verify"
          >
            {loading ? "Verifying..." : "Verify"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtpModal;
