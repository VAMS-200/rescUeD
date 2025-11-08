import React from "react";
import { motion } from "framer-motion";
import {
  Wrench,
  Battery,
  Truck,
  Fuel,
  Navigation,
  KeyRound,
  Car,
  AlertTriangle,
} from "lucide-react";
import { Link } from "react-router-dom";

function Services() {
  const user = JSON.parse(localStorage.getItem("user"));

  const getRedirectLink = () => {
    if (!user) return "/login?role=customer";
    const role = user.role?.toLowerCase();
    if (role === "customer") return "/customer-dashboard";
    if (role === "serviceman") return "/service-man-dashboard";
    if (role === "admin") return "/admin-dashboard";
    return "/login";
  };

  const services = [
    {
      icon: <Wrench className="w-12 h-12 mx-auto text-blue-600" />,
      title: "On-Site Vehicle Repair",
      desc: "Our skilled mechanics fix minor vehicle issues right where you are — no towing required.",
    },
    {
      icon: <Truck className="w-12 h-12 mx-auto text-blue-600" />,
      title: "Towing Service",
      desc: "When your vehicle can’t be fixed on the spot, we’ll tow it safely to the nearest workshop.",
    },
    {
      icon: <Battery className="w-12 h-12 mx-auto text-blue-600" />,
      title: "Battery Jumpstart",
      desc: "Dead battery? Get an instant jumpstart from our mobile service professionals.",
    },
    {
      icon: <Fuel className="w-12 h-12 mx-auto text-blue-600" />,
      title: "Fuel Delivery",
      desc: "Ran out of fuel? Don’t worry — we’ll bring petrol or diesel right to your location.",
    },
    {
      icon: <Navigation className="w-12 h-12 mx-auto text-blue-600" />,
      title: "Emergency Navigation",
      desc: "Get real-time mechanic tracking and ETA updates to stay informed every step of the way.",
    },
    {
      icon: <KeyRound className="w-12 h-12 mx-auto text-blue-600" />,
      title: "Lockout Assistance",
      desc: "Locked your keys inside? Our experts can safely unlock your car without damage.",
    },
    {
      icon: <Car className="w-12 h-12 mx-auto text-blue-600" />,
      title: "Flat Tire Repair",
      desc: "Quick on-site tire repair and replacement to get you rolling again fast.",
    },
    {
      icon: <AlertTriangle className="w-12 h-12 mx-auto text-blue-600" />,
      title: "Accident Support",
      desc: "In case of accidents, we help with quick recovery, towing, and support services.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* ---------------- HEADER ---------------- */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center py-16 px-6 md:px-20"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
          Our <span className="text-blue-500">Services</span>
        </h1>
        <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
          From roadside emergencies to routine assistance, rescUeD ensures 
          reliable help — anytime, anywhere. We’re here to keep you moving.
        </p>
      </motion.section>

      {/* ---------------- SERVICE CARDS ---------------- */}
      <section className="py-16 px-6 md:px-20 bg-white text-center">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="p-6 bg-blue-50 hover:bg-blue-100 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <div className="mb-3">{service.icon}</div>
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------------- CTA SECTION ---------------- */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-6"
        >
          Need Help Right Now?
        </motion.h2>
        <p className="text-lg mb-8 opacity-90">
          Connect instantly with our nearest available mechanic and get back on the road — fast & safe.
        </p>
        <Link
          to={getRedirectLink()}
          className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
        >
          Get Help Now
        </Link>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="bg-gray-900 text-gray-300 text-center py-6 mt-auto">
        <p>© {new Date().getFullYear()} rescUeD | All Rights Reserved</p>
        <p className="text-sm mt-1">Fast, reliable roadside help wherever you are </p>
      </footer>
    </div>
  );
}

export default Services;
