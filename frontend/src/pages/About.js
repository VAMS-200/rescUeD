import React from "react";
import { motion } from "framer-motion";
import { Shield, HeartHandshake, Clock, Wrench, Rocket, Handshake, Heart } from "lucide-react";

function About() {
  const team = [
    {
      name: "Vamsi",
      role: "Full Stack Devloper",
      img: "https://i.ibb.co/7x8nsjcg/Whats-App-Image-2025-11-08-at-16-25-47-bb01d7ab.jpg", 
    }
  //    {
  //     name: "Sai Lokesh",
  //     role: "Team Lead & Backend Engineer",
  //     img: "https://i.ibb.co/v4DZYxh4/Whats-App-Image-2025-11-08-at-17-10-02-4f546514.jpg",
  //   },
  //   {
  //     name: "Krishna Kanth",
  //     role: "Frontend Developer & Deployment",
  //     img: "https://i.ibb.co/993BpptW/download-1.jpg",
  //   },
   
  //   {
  //     name: "Pranathi",
  //     role: "Quality Assurance & Documentation",
  //     img: "https://i.ibb.co/sJyPKtn2/Whats-App-Image-2025-11-08-at-17-10-32-a0058774.jpg",
  //   },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* ---------------- HEADER SECTION ---------------- */}
      <motion.section
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center py-16 px-6 md:px-20"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
          About <span className="text-blue-500">rescUeD</span>
        </h1>
        <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
          rescUeD is your trusted on-demand vehicle repair platform —
          connecting stranded drivers with nearby verified mechanics in minutes.
          Whether it’s a flat tyre, battery issue, or engine trouble, we ensure
          help reaches you anywhere, anytime.
        </p>
      </motion.section>

      {/* ---------------- OUR MISSION SECTION ---------------- */}
      <section className="bg-white py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-10">Our Mission</h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              icon: <Clock className="w-12 h-12 mx-auto text-blue-600" />,
              title: "Fast Response",
              desc: "We aim to provide quick roadside help through a network of trusted mechanics located near you.",
            },
            {
              icon: (
                <HeartHandshake className="w-12 h-12 mx-auto text-blue-600" />
              ),
              title: "Customer Care",
              desc: "We value our users and ensure smooth communication between customers and service professionals.",
            },
            {
              icon: <Shield className="w-12 h-12 mx-auto text-blue-600" />,
              title: "Safety & Trust",
              desc: "All our service men are verified and trained to handle your vehicle safely and professionally.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-blue-50 hover:bg-blue-100 p-6 rounded-xl shadow-md transition"
            >
              <div className="mb-3">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------------- WHO WE ARE SECTION ---------------- */}
      <section className="py-16 px-6 md:px-20 text-center bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-10"
        >
          Who We Are
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-6 text-lg opacity-95">
          <p>
            We’re a passionate team of developers, engineers, and service
            professionals dedicated to making vehicle breakdown assistance
            simple and reliable.
          </p>
          <p>
            Our platform is built for emergencies — ensuring you’re never left
            stranded, whether on a busy city road or a remote highway.
          </p>
          <p>
            rescUeD bridges the gap between drivers and mechanics, using
            technology to bring peace of mind to every journey.
          </p>
        </div>
      </section>

      {/* ---------------- OUR VALUES SECTION ---------------- */}
      <section className="bg-white py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-10">
          Our Core Values
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
         {[
  {
    icon: <Wrench className="w-12 h-12 mx-auto text-blue-600" />,
    title: "Reliability",
    desc: "Always there when you need us most.",
  },
  {
    icon: <Rocket className="w-12 h-12 mx-auto text-blue-600" />,
    title: "Innovation",
    desc: "Leveraging technology for smarter solutions.",
  },
  {
    icon: <Handshake className="w-12 h-12 mx-auto text-blue-600" />,
    title: "Trust",
    desc: "Every mechanic is verified and customer-rated.",
  },
  {
    icon: <Heart className="w-12 h-12 mx-auto text-blue-600" />,
    title: "Care",
    desc: "We go the extra mile to ensure your safety and comfort.",
  },
].map((val, i) => (
  <motion.div
    key={i}
    whileHover={{ scale: 1.05 }}
    className="p-6 bg-blue-50 hover:bg-blue-100 rounded-xl shadow-md"
  >
    <div className="mb-3">{val.icon}</div>
    <h3 className="text-lg font-semibold mb-1 text-blue-700">{val.title}</h3>
    <p className="text-gray-600">{val.desc}</p>
  </motion.div>
))}

        </div>
      </section>

      {/* ---------------- TEAM SECTION ---------------- */}
      <section className="py-16 px-6 md:px-20 text-center bg-gradient-to-br from-blue-100 via-white to-blue-50">
        <h2 className="text-3xl font-bold text-blue-700 mb-10">Meet Our Team</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5, scale: 1.03 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition"
            >
              <img
                src={member.img}
                alt={member.name}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";
                }}
                className="w-24 h-24 mx-auto rounded-full mb-4 border-4 border-blue-600 object-cover hover:scale-105 transition-transform"
              />
              <h3 className="text-xl font-semibold text-blue-700">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="bg-gray-900 text-gray-300 text-center py-6 mt-auto">
        <p>© {new Date().getFullYear()} rescUeD | All Rights Reserved</p>
        <p className="text-sm mt-1">Empowering safer journeys every day </p>
      </footer>
    </div>
  );
}

export default About;
