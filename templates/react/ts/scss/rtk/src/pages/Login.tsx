import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import VerifyOtpModal from "../component/auth/VerifyOtpModal";
import { useLoginMutation } from "../store/services/api";
import "./Login.scss";

const Login = () => {
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();

  const [showOtp, setShowOtp] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    // await login({
    //   email: "test@test.com",
    //   password: "123456",
    // });
    setShowOtp(true);
  };

  const handleOtpSuccess = () => {
    localStorage.setItem("token", "dummy-token");
    navigate("/dashboard");
  };

  return (
    <div className="login-container">
      <div className="auth-card">
        <h2 className="auth-title">Login</h2>

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

        <button
          className="auth-button"
          onClick={handleLogin}
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Login"}
        </button>
        <span className="auth-footer">
          Dont have an account?{" "}
          <Link to="/signup" className="auth-link">
            Signup
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

export default Login;
