import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { User, Lock, Car } from "lucide-react"; // ✅ Added modern icons

function Login({ setUser }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    role: "customer",
  });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Auto-select role based on URL param (?role=customer or ?role=serviceMan)
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const roleParam = params.get("role");
    if (roleParam) {
      setFormData((prev) => ({ ...prev, role: roleParam }));
    }
  }, [location.search]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:5001/api/auth/login", formData);
      if (res.data.success && res.data.user) {
        const user = res.data.user;
        localStorage.setItem("user", JSON.stringify(user));
        setUser(user);

        const role = user.role.toLowerCase();
        if (role === "customer") navigate("/customer-dashboard", { replace: true });
        else if (role === "serviceman") navigate("/service-man-dashboard", { replace: true });
        else if (role === "admin") navigate("/admin-dashboard", { replace: true });
        else alert("Unknown role: " + user.role);
      } else {
        alert(res.data.msg || "Login failed");
      }
    } catch (err) {
      alert(err.response?.data?.msg || "Login failed due to server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* ---------------- LEFT SECTION ---------------- */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col justify-center items-center md:items-start w-full md:w-1/2 px-8 md:px-12 py-10 bg-blue-700 text-white text-center md:text-left"
      >
        <h1 className="text-4xl font-extrabold mb-4 flex items-center justify-center md:justify-start gap-2">
          <Car className="w-8 h-8" />
          Welcome to rescUeD
        </h1>

        <p className="text-lg leading-relaxed mb-6 opacity-90 max-w-md">
          Stuck on the road? No worries!  
          Our platform connects you instantly with nearby verified mechanics who can come to your location for quick repairs and assistance.
        </p>

        <ul className="space-y-2 text-white/90 text-base md:text-lg">
          <li>🔧 Instant roadside assistance</li>
          <li>🧰 Verified service professionals</li>
          <li>📍 Location-based repair requests</li>
          <li>⏱️ 24/7 emergency support</li>
        </ul>

        <div className="mt-8">
          <p className="text-sm opacity-80">New to rescUeD?</p>
          <Link
            to="/register"
            className="inline-block bg-white text-blue-700 px-6 py-2 mt-2 rounded-lg font-semibold hover:bg-blue-50 transition"
          >
            Register Now
          </Link>
        </div>
      </motion.div>

      {/* ---------------- RIGHT SECTION ---------------- */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-center w-full md:w-1/2 p-6"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8 border border-gray-100"
        >
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
            Login to rescUeD
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Username Input */}
            <div className="relative">
              <User className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="text"
                name="username"
                placeholder="Enter your username"
                value={formData.username}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Password Input with Toggle */}
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-500 cursor-pointer select-none"
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>

            {/* Role Dropdown */}
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
            >
              <option value="customer">Customer</option>
              <option value="serviceMan">Service Man</option>
            </select>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition disabled:opacity-50"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          {/* Admin link */}
          <p className="mt-3 text-center text-gray-600">
            Admin?{" "}
            <Link
              to="/admin-login"
              className="text-blue-700 hover:underline font-semibold"
            >
              Login here
            </Link>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Login;
