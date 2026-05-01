"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      setStatus(data.success ? "success" : "error");

      if (data.success) {
        setForm({ name: "", email: "", message: "" });
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="relative min-h-screen py-24 px-6 lg:px-24 bg-[#0b0b0b] text-white overflow-hidden">

      {/* Enhanced Glow System */}
      <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-green-500 opacity-20 blur-[140px]" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-yellow-400 opacity-20 blur-[140px]" />

      {/* Heading (UPGRADED TYPOGRAPHY) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-green-400 to-yellow-300 bg-clip-text text-transparent">
            Let’s Work Together
          </span>
        </h1>

        <p className="text-gray-400 mt-5 text-lg max-w-2xl mx-auto leading-relaxed">
          I build fast, modern, scalable web applications with strong focus on design, performance, and user experience.
        </p>
      </motion.div>

      {/* Cards (IMPROVED DEPTH) */}
      <div className="grid md:grid-cols-2 gap-10 mb-20">

        <motion.div
          whileHover={{ y: -8, scale: 1.02 }}
          className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-xl hover:shadow-green-500/10 transition"
        >
          <h2 className="text-2xl font-bold mb-5 text-green-400">
            What I Offer
          </h2>
          <ul className="space-y-3 text-gray-300">
            <li>✨ Modern Frontend (React, Next.js, Tailwind)</li>
            <li>⚡ Backend Development (PHP, APIs, MySQL)</li>
            <li>🌐 Full Stack Web Applications</li>
            <li>🎨 UI/UX + Motion Design</li>
          </ul>
        </motion.div>

        <motion.div
          whileHover={{ y: -8, scale: 1.02 }}
          className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-xl hover:shadow-yellow-400/10 transition"
        >
          <h2 className="text-2xl font-bold mb-5 text-yellow-300">
            Why Choose Me?
          </h2>
          <p className="text-gray-300 leading-relaxed">
            I focus on building high-performance, clean, and scalable systems with attention to detail and modern UI standards.
          </p>
        </motion.div>
      </div>

      {/* FORM CARD (BIG UPGRADE HERE) */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.01 }}
        className="max-w-3xl mx-auto backdrop-blur-2xl bg-white/5 border border-white/10 p-10 rounded-3xl shadow-2xl hover:shadow-green-500/10 transition"
      >

        <h2 className="text-3xl font-bold text-center mb-10 text-green-300">
          Start a Project 🚀
        </h2>

        <form onSubmit={handleSubmit} className="space-y-8">

          {/* INPUT */}
          {["name", "email"].map((field) => (
            <div key={field} className="relative">
              <input
                type={field === "email" ? "email" : "text"}
                name={field}
                value={form[field]}
                onChange={handleChange}
                placeholder=" "
                required
                className="w-full bg-transparent border-b border-gray-600 focus:border-green-400 outline-none py-3 text-white peer transition"
              />

              <label className="absolute left-0 top-3 text-gray-400 text-sm transition-all
                peer-placeholder-shown:top-3
                peer-placeholder-shown:text-gray-500
                peer-focus:-top-5 peer-focus:text-green-400
                peer-not-placeholder-shown:-top-5 peer-not-placeholder-shown:text-green-400">
                {field === "name" ? "Your Name" : "Your Email"}
              </label>
            </div>
          ))}

          {/* MESSAGE */}
          <div className="relative">
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="5"
              placeholder=" "
              required
              className="w-full bg-transparent border-b border-gray-600 focus:border-green-400 outline-none py-3 text-white peer transition"
            />

            <label className="absolute left-0 top-3 text-gray-400 text-sm transition-all
              peer-placeholder-shown:top-3
              peer-focus:-top-5 peer-focus:text-green-400
              peer-not-placeholder-shown:-top-5 peer-not-placeholder-shown:text-green-400">
              Your Message
            </label>
          </div>

          {/* BUTTON (PREMIUM FEEL) */}
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-4 rounded-full font-semibold text-black
            bg-gradient-to-r from-green-400 via-green-300 to-yellow-300
            hover:shadow-xl hover:shadow-green-400/30
            active:scale-95 transition-all duration-300"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>

          {/* STATUS */}
          {status === "success" && (
            <p className="text-green-400 text-center animate-pulse">
              ✅ Message sent successfully!
            </p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-center">
              ❌ Failed to send message
            </p>
          )}
        </form>

        {/* QUICK CONTACT (UPGRADED) */}
        <div className="flex justify-center gap-8 mt-10 text-sm">
          <a
            href="https://wa.me/923490669982"
            target="_blank"
            rel="noopener noreferrer"
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

      {/* FOOTER NOTE */}
      <p className="text-center text-gray-500 mt-16">
        Available for freelance & internship opportunities
      </p>

    </section>
  );
};

export default ContactPage;