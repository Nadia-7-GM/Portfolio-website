"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

const ContactPage = () => {
  return (
    <section className="min-h-screen py-20 px-6 lg:px-24 bg-[#0f0f0f] text-white relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-green-500 opacity-20 blur-[120px]"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-yellow-400 opacity-20 blur-[120px]"></div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-yellow-300">
          Let’s Work Together
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          I help businesses and individuals build modern, fast, and scalable web applications.
        </p>
      </motion.div>

      {/* Cards Section */}
      <div className="grid md:grid-cols-2 gap-10 mb-16">

        {/* Services Card */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 shadow-lg hover:scale-105 transition"
        >
          <h2 className="text-2xl font-bold mb-4 text-green-400">What I Offer</h2>
          <ul className="space-y-3 text-gray-300">
            <li>✨ Modern Frontend (React, Next.js, Tailwind)</li>
            <li>⚡ Backend Development (PHP, APIs, MySQL)</li>
            <li>🌐 Full Stack Web Applications</li>
            <li>🎨 UI/UX Design & Animations</li>
          </ul>
        </motion.div>

        {/* Why Me Card */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 shadow-lg hover:scale-105 transition"
        >
          <h2 className="text-2xl font-bold mb-4 text-yellow-300">Why Choose Me?</h2>
          <p className="text-gray-300 leading-relaxed">
            I focus on delivering clean, scalable, and high-performance applications.
            With strong attention to detail and modern design trends, I ensure your
            project stands out and performs flawlessly.
          </p>
        </motion.div>
      </div>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto backdrop-blur-lg bg-white/5 border border-white/10 p-10 rounded-2xl shadow-xl"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">
          Start a Project 🚀
        </h2>

        <form className="space-y-6">

          {/* Name */}
          <div className="relative">
            <input
              type="text"
              required
              className="w-full bg-transparent border-b border-gray-500 focus:border-green-400 outline-none py-2 peer"
            />
            <label className="absolute left-0 top-2 text-gray-400 text-sm peer-focus:-top-4 peer-focus:text-green-400 transition-all">
              Your Name
            </label>
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              required
              className="w-full bg-transparent border-b border-gray-500 focus:border-green-400 outline-none py-2 peer"
            />
            <label className="absolute left-0 top-2 text-gray-400 text-sm peer-focus:-top-4 peer-focus:text-green-400 transition-all">
              Your Email
            </label>
          </div>

          {/* Message */}
          <div className="relative">
            <textarea
              rows="4"
              required
              className="w-full bg-transparent border-b border-gray-500 focus:border-green-400 outline-none py-2 peer"
            ></textarea>
            <label className="absolute left-0 top-2 text-gray-400 text-sm peer-focus:-top-4 peer-focus:text-green-400 transition-all">
              Your Message
            </label>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-full bg-gradient-to-r from-green-400 to-yellow-300 text-black font-semibold hover:scale-105 transition"
          >
            Send Message
          </button>
        </form>

        {/* Quick Contact */}
        <div className="flex justify-center gap-6 mt-8">
          <a
            href="https://wa.me/923490669982"
            target="_blank"
            className="flex items-center gap-2 text-green-400 hover:scale-110 transition"
          >
            <FaWhatsapp /> WhatsApp
          </a>

          <a
            href="mailto:your@email.com"
            className="flex items-center gap-2 text-yellow-300 hover:scale-110 transition"
          >
            <FaEnvelope /> Email
          </a>
        </div>
      </motion.div>

      {/* Availability */}
      <p className="text-center text-gray-500 mt-12">
        Available for freelance & internship opportunities
      </p>

    </section>
  );
};

export default ContactPage;