import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";

// ✅ Import Shared Components
import Navbar from "./components/Navbar";

// ✅ Import All Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import AdminLogin from "./pages/AdminLogin";
import Register from "./pages/Register";
import CustomerDashboard from "./pages/CustomerDashboard";
import ServiceManDashboard from "./pages/ServiceManDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import YourRequests from "./pages/YourRequests";
import ServiceCompletedTasks from "./pages/ServiceCompletedTasks";

// ------------------ WRAPPER FOR NAVBAR VISIBILITY ------------------
function AppWrapper({ user, setUser }) {
  const location = useLocation();

  // Pages where Navbar should be hidden
  const noNavbarRoutes = [
    "/admin-login",
    "/customer-dashboard",
    "/service-man-dashboard",
    "/admin-dashboard",
    "/your-requests",
    "/service-completed-tasks",
  ];

  const showNavbar = !noNavbarRoutes.includes(location.pathname);

  const getRole = (role) => role?.toLowerCase();

  return (
    <>
      {showNavbar && <Navbar />}

      <Routes>
        {/* ---------------- DEFAULT ROUTES ---------------- */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />

        {/* ---------------- AUTH ROUTES ---------------- */}
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/admin-login" element={<AdminLogin setUser={setUser} />} />
        <Route path="/register" element={<Register />} />

        {/* ---------------- CUSTOMER ROUTES ---------------- */}
        <Route
          path="/customer-dashboard"
          element={
            user && getRole(user.role) === "customer" ? (
              <CustomerDashboard />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/your-requests"
          element={
            user && getRole(user.role) === "customer" ? (
              <YourRequests />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        {/* ---------------- SERVICE MAN ROUTES ---------------- */}
        <Route
          path="/service-man-dashboard"
          element={
            user && getRole(user.role) === "serviceman" ? (
              <ServiceManDashboard />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/service-completed-tasks"
          element={
            user && getRole(user.role) === "serviceman" ? (
              <ServiceCompletedTasks />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        {/* ---------------- ADMIN ROUTES ---------------- */}
        <Route
          path="/admin-dashboard"
          element={
            user && getRole(user.role) === "admin" ? (
              <AdminDashboard />
            ) : (
              <Navigate to="/admin-login" replace />
            )
          }
        />

        {/* ---------------- FALLBACK ROUTE ---------------- */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

// ------------------ MAIN APP ------------------
function App() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  return (
    <Router>
      <AppWrapper user={user} setUser={setUser} />
    </Router>
  );
}

export default App;
