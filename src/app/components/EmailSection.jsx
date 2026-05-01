"use client";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 text-white">

      {/* HEADING WITH SAME ANIMATION STYLE */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h2 className="text-4xl font-bold text-green-300 relative inline-block group">
          Get In Touch
          <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-green-300 rounded transition-all duration-300 group-hover:w-full"></span>
        </h2>

        <p className="text-[#ADB7BE] mt-4">
          Let’s work together — I’m open to opportunities and projects.
        </p>
      </motion.div>

      {/* FORM CONTAINER */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="max-w-2xl mx-auto glass p-6 rounded-xl"
      >
        <form className="space-y-4">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 bg-[#121212] border border-[#2a2a2a] rounded-lg text-white focus:border-green-400 outline-none transition"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 bg-[#121212] border border-[#2a2a2a] rounded-lg text-white focus:border-green-400 outline-none transition"
          />

          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 bg-[#121212] border border-[#2a2a2a] rounded-lg text-white focus:border-green-400 outline-none transition"
          />

          <button
            type="submit"
            className="w-full py-3 bg-green-700 rounded-lg hover:shadow-[0_0_20px_rgba(107,143,113,0.4)] transition"
          >
            Send Message
          </button>

        </form>
      </motion.div>

    </section>
  );
}