import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import VerifyOtpModal from "../component/auth/VerifyOtpModal";
import "./Auth.scss";

const Login = () => {
  const navigate = useNavigate();
  const [showOtp, setShowOtp] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    // const res = await apiCallPost("/auth/login", form, {}, true);

    // if (res?.success) {
    setShowOtp(true);
    // }
  };

  const handleOtpSuccess = () => {
    localStorage.setItem("token", "dummy-token");
    navigate("/dashboard");
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2 className="login-title">Login</h2>

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

        <button onClick={handleLogin} className="login-button">
          Login
        </button>

        <div className="login-footer">
          Dont have an account?{" "}
          <Link to="/signup" className="signup-link">
            Signup
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

export default Login;
