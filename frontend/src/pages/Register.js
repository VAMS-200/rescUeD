import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { User, Phone, Lock, FileText, Shield, Wrench } from "lucide-react"; // modern icons

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    username: "",
    password: "",
    role: "customer",
  });

  const [photo, setPhoto] = useState(null);
  const [aadhaar, setAadhaar] = useState(null);
  const [drivingLicense, setDrivingLicense] = useState(null);

  // Admin OTP
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    // Reset OTP if role changes
    if (e.target.name === "role" && e.target.value !== "admin") {
      setOtp("");
      setOtpSent(false);
      setOtpVerified(false);
    }
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (!files?.length) return;
    if (name === "photo") setPhoto(files[0]);
    if (name === "aadhaar") setAadhaar(files[0]);
    if (name === "drivingLicense") setDrivingLicense(files[0]);
  };

  // Send OTP (for admin only)
  const sendOtp = async () => {
    if (!formData.mobile) return alert("Enter mobile number first");
    try {
      const res = await axios.post("https://rescued.onrender.com/api/auth/send-otp", {
        mobile: formData.mobile,
        role: "admin",
      });
      if (res.data.success) {
        setOtpSent(true);
        alert("OTP sent ✅");
      } else {
        alert(res.data.msg);
      }
    } catch (err) {
      console.error(err);
      alert("Failed to send OTP");
    }
  };

  const verifyOtp = async () => {
    try {
      const res = await axios.post("https://rescued.onrender.com/api/auth/verify-otp", {
        mobile: formData.mobile,
        otp,
        role: "admin",
      });
      if (res.data.success) {
        setOtpVerified(true);
        setOtpSent(false);
        alert("OTP verified ✅");
      } else {
        alert(res.data.msg);
      }
    } catch (err) {
      console.error(err);
      alert("Failed to verify OTP");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.role === "admin" && !otpVerified) {
      return alert("Please verify admin OTP first");
    }

    try {
      const data = new FormData();
      Object.keys(formData).forEach((key) => data.append(key, formData[key]));
      if (formData.role === "serviceMan") {
        if (photo) data.append("photo", photo);
        if (aadhaar) data.append("aadhaar", aadhaar);
        if (drivingLicense) data.append("drivingLicense", drivingLicense);
      }

      const res = await axios.post(
        "https://rescued.onrender.com/api/auth/register",
        data,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (res.data.success) {
        alert("Registration successful! Please login.");
        navigate("/login", { replace: true });
      } else {
        alert(res.data.msg || "Registration failed");
      }
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.msg || "Server error");
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* ---------------- LEFT INFO PANEL ---------------- */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col justify-center items-center md:items-start w-full md:w-1/2 px-8 md:px-12 py-10 bg-blue-700 text-white text-center md:text-left"
      >
        <h1 className="text-4xl font-extrabold mb-4 flex items-center gap-2">
          <Shield className="w-8 h-8" />
          Join rescUeD Today
        </h1>

        <p className="text-lg leading-relaxed mb-6 opacity-90 max-w-md">
          Become a part of rescUeD today — whether you’re a customer looking
          for instant roadside help or a service professional ready to assist.
        </p>

        <ul className="space-y-2 text-white/90 text-base md:text-lg">
          <li>🔧 Get quick service requests near you</li>
          <li>🚗 Help stranded drivers on the road</li>
          <li>📱 Manage everything through your dashboard</li>
        </ul>

        <div className="mt-8">
          <p className="text-sm opacity-80">Already a member?</p>
          <Link
            to="/login"
            className="inline-block bg-white text-blue-700 px-6 py-2 mt-2 rounded-lg font-semibold hover:bg-blue-50 transition"
          >
            Login Now
          </Link>
        </div>
      </motion.div>

      {/* ---------------- RIGHT FORM ---------------- */}
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
            Create an Account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div className="relative">
              <User className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Mobile */}
            <div className="relative">
              <Phone className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="text"
                name="mobile"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Admin OTP */}
            {formData.role === "admin" && !otpVerified && (
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={sendOtp}
                  className="bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-600"
                >
                  Send OTP
                </button>
                <input
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md"
                />
                <button
                  type="button"
                  onClick={verifyOtp}
                  className="bg-green-500 text-white px-3 py-2 rounded-md hover:bg-green-600"
                >
                  Verify
                </button>
              </div>
            )}

            {/* Username */}
            <div className="relative">
              <FileText className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
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

            {/* Role */}
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
            >
              <option value="customer">Customer</option>
              <option value="serviceMan">Service Man</option>
              <option value="admin">Admin</option>
            </select>

            {/* KYC for Service Man */}
            {formData.role === "serviceMan" && (
              <div className="space-y-3">
                <label className="block">
                  <span className="text-gray-700 font-medium">Recent Picture</span>
                  <input
                    type="file"
                    name="photo"
                    accept="image/*"
                    onChange={handleFileChange}
                    required
                    className="mt-1 block w-full"
                  />
                </label>

                <label className="block">
                  <span className="text-gray-700 font-medium">Aadhaar Card</span>
                  <input
                    type="file"
                    name="aadhaar"
                    accept="image/*,.pdf"
                    onChange={handleFileChange}
                    required
                    className="mt-1 block w-full"
                  />
                </label>

                <label className="block">
                  <span className="text-gray-700 font-medium">Driving Licence</span>
                  <input
                    type="file"
                    name="drivingLicense"
                    accept="image/*,.pdf"
                    onChange={handleFileChange}
                    required
                    className="mt-1 block w-full"
                  />
                </label>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Register
            </button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Register;
