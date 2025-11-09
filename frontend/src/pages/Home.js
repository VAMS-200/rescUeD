import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Wrench, MapPin, Clock, Shield } from "lucide-react";

function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-blue-100">

      {/* ---------------- HERO SECTION ---------------- */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-16 mt-6"
      >
        {/* Left text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-4">
            Stuck on the Road? <br /> We’ve Got You Covered!
          </h1>
          <p className="text-gray-700 mb-6 leading-relaxed">
            rescUeD connects you with nearby service man instantly when your vehicle breaks down.  
            Reliable, fast, and available 24/7 — wherever you are.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <Link
              to="/login?role=customer"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Get Instant Help
            </Link>

            <Link
              to="/login?role=serviceMan"
              className="border border-blue-600 text-blue-600 px-6 py-2 rounded-md hover:bg-blue-50 transition"
            >
              Join as Service Man
            </Link>
          </div>
        </div>

        {/* Right image */}
      <motion.img
  src="https://i.ibb.co/r24h7rkW/Gemini-Generated-Image-j9r7y7j9r7y7j9r7.png"
  alt="Vehicle repair"
  className="w-96 md:w-[520px] mt-10 md:mt-0 object-contain"
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.7 }}
/>

      </motion.section>

      {/* ---------------- HOW IT WORKS ---------------- */}
      <section className="bg-white py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-10">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { title: "Request Help", desc: "Enter your location and vehicle issue.", icon: <MapPin className="w-10 h-10 mx-auto text-blue-600" /> },
            { title: "Service Man Arrives", desc: "Nearest verified service man accepts your request.", icon: <Wrench className="w-10 h-10 mx-auto text-blue-600" /> },
            { title: "Get Back on Road", desc: "Quick repairs done on-site so you can continue your journey.", icon: <Clock className="w-10 h-10 mx-auto text-blue-600" /> },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl shadow-lg bg-blue-50 hover:bg-blue-100 transition"
            >
              <div className="mb-3">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------------- WHY CHOOSE US ---------------- */}
      <section className="py-16 px-6 md:px-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center">
        <h2 className="text-3xl font-bold mb-10">Why Choose rescUeD?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: <Clock className="w-10 h-10 mx-auto" />, title: "Quick Response", desc: "Get help in minutes, not hours." },
            { icon: <Shield className="w-10 h-10 mx-auto" />, title: "Verified Service Man", desc: "We ensure safety and quality service every time." },
            { icon: <Wrench className="w-10 h-10 mx-auto" />, title: "Trusted Service", desc: "Thousands of happy customers across the city." },
          ].map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white/10 p-6 rounded-xl shadow-lg hover:shadow-2xl transition"
            >
              <div className="mb-3">{card.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="opacity-90">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="bg-gray-900 text-gray-300 text-center py-6 mt-auto">
        <p>© {new Date().getFullYear()} rescUeD | All Rights Reserved</p>
        <p className="text-sm mt-1">Made with ❤️ for safer journeys</p>
      </footer>
    </div>
  );
}

export default Home;
