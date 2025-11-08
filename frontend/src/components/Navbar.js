import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  // Helper to highlight the active page
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="flex justify-between items-center px-6 md:px-12 py-4 bg-white shadow-md sticky top-0 z-50">
      <h1 className="text-2xl md:text-3xl font-bold text-blue-700">
        rescUeD
      </h1>

      <div className="space-x-4 text-gray-700 font-medium">
        <Link
          to="/"
          className={`${isActive("/") ? "text-blue-600 font-semibold" : "hover:text-blue-600"}`}
        >
          Home
        </Link>

        <Link
          to="/about"
          className={`${isActive("/about") ? "text-blue-600 font-semibold" : "hover:text-blue-600"}`}
        >
          About
        </Link>

        <Link
          to="/services"
          className={`${isActive("/services") ? "text-blue-600 font-semibold" : "hover:text-blue-600"}`}
        >
          Services
        </Link>

        <Link
          to="/contact"
          className={`${isActive("/contact") ? "text-blue-600 font-semibold" : "hover:text-blue-600"}`}
        >
          Contact
        </Link>

        <Link
          to="/login"
          className={`${isActive("/login") ? "text-blue-600 font-semibold" : "hover:text-blue-600"}`}
        >
          Login
        </Link>

        <Link
          to="/register"
          className="bg-blue-600 text-white px-4 py-1.5 rounded-md hover:bg-blue-700 transition"
        >
          Register
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
