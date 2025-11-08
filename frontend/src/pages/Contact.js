import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // In a real app, send the form data to your backend or email API
    setTimeout(() => {
      alert("Thank you! Your message has been sent successfully 🚗");
      setFormData({ name: "", email: "", message: "" });
      setSubmitted(false);
    }, 1000);
  };

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
          Contact <span className="text-blue-500">Us</span>
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed">
          We’re here to help you 24/7! Whether you need roadside assistance or have 
          a question about our services, feel free to reach out anytime.
        </p>
      </motion.section>

      {/* ---------------- CONTACT DETAILS + FORM ---------------- */}
      <section className="py-10 px-6 md:px-20 flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-8 rounded-2xl shadow-lg w-full md:w-1/3 text-center md:text-left"
        >
          <h2 className="text-2xl font-bold text-blue-700 mb-6">Get in Touch</h2>
          <div className="space-y-4 text-gray-700">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <Phone className="text-blue-600" />
              <p>+91 98765 43210</p>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <Mail className="text-blue-600" />
              <p>support@rescuedvit.com</p>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <MapPin className="text-blue-600" />
              <p>Amaravati, Andhra Pradesh, India</p>
            </div>
          </div>
          <p className="mt-6 text-gray-600 leading-relaxed">
            Our customer support team is available 24/7 to ensure your journey 
            continues without interruptions.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-lg w-full md:w-1/2 space-y-4"
        >
          <h2 className="text-2xl font-bold text-blue-700 mb-2 text-center md:text-left">
            Send Us a Message
          </h2>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
          />

          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
          />

          <button
            type="submit"
            disabled={submitted}
            className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition disabled:opacity-50"
          >
            <Send size={18} />
            {submitted ? "Sending..." : "Send Message"}
          </button>
        </motion.form>
      </section>

      {/* ---------------- GOOGLE MAP ---------------- */}
      <section className="px-6 md:px-20 py-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Our Service Coverage</h2>
        <p className="opacity-90 mb-6">
          Currently operational across major cities in Andhra Pradesh.
        </p>
        <div className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-lg">
          <iframe
            title="Service Area Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.725154249406!2d80.49823!3d16.49412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93eecb53ff59%3A0x6469671f2e5d7b71!2sVIT-AP University, Inavolu, Amaravati – 522237!5e0!3m2!1sen!2sin!4vYOUR_TIMESTAMP_HERE!5m2!1sen!2sin"
            width="100%"
            height="350"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="bg-gray-900 text-gray-300 text-center py-6 mt-auto">
        <p>© {new Date().getFullYear()} rescUeD | All Rights Reserved</p>
        <p className="text-sm mt-1">Reach us anytime — we’re here for you </p>
      </footer>
    </div>
  );
}

export default Contact;
