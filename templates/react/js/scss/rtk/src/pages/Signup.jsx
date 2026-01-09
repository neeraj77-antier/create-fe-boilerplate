import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import VerifyOtpModal from "../component/auth/VerifyOtpModal";
import "./Signup.scss";

const Signup = () => {
  const navigate = useNavigate();
  const [showOtp, setShowOtp] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSignup = async () => {
    // const res = await apiCallPost(
    //   "/auth/signup",
    //   form,
    //   {},
    //   true
    // );

    // if (res?.success) {
    // setRefId(res?.data?.refId || "");
    setShowOtp(true);
    // }
  };

  const handleOtpSuccess = () => {
    navigate("/login");
  };

  return (
    <div className="signup-container">
      <div className="auth-card">
        <h2 className="auth-title">Signup</h2>

        <input
          className="auth-input"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          className="auth-input password-input"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button onClick={handleSignup} className="auth-button">
          Create Account
        </button>
        <span className="auth-footer">
          Already have an account?{" "}
          <Link to="/login" className="auth-link">
            Login
          </Link>
        </span>
      </div>

      <VerifyOtpModal
        isOpen={showOtp}
        onClose={() => setShowOtp(false)}
        onVerifySuccess={handleOtpSuccess}
      />
    </div>
  );
};

export default Signup;
