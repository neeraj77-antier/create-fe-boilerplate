import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import VerifyOtpModal from "../component/auth/VerifyOtpModal";
import { useLoginMutation } from "../store/services/api";

const Login = () => {
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();

  const [showOtp, setShowOtp] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    await login({
      email: "test@test.com",
      password: "123456",
    });
  };

  const handleOtpSuccess = () => {
    localStorage.setItem("token", "dummy-token");
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-96 p-6 bg-white rounded shadow">
        <h2 className="text-xl font-bold mb-4">Login</h2>

        <input
          className="border w-full p-2 mb-2 rounded"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          className="border w-full p-2 mb-4 rounded"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button className="w-full bg-blue-500 text-white p-2 rounded" onClick={handleLogin}>
          {isLoading ? "Loading..." : "Login"}
        </button>
        <span className="text-sm text-gray-600 mt-2 block text-center">
          Dont have an account?{" "}
          <Link to="/signup" className="text-blue-600 cursor-pointer">
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
