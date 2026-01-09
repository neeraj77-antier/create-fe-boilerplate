import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import VerifyOtpModal from "../component/auth/VerifyOtpModal";
import "./Auth.scss";

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
    <div className="login-wrapper">
      <div className="login-card">
        <h2 className="login-title">Signup</h2>

        <input
          className="login-input"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          className="login-input"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button onClick={handleSignup} className="login-button">
          Create Account
        </button>

        <div className="login-footer">
          Already have an account?{" "}
          <Link to="/login" className="signup-link">
            Login
          </Link>
        </div>
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
