"use client";

import React, { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  const cardRef = useRef(null);

  // cursor position
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // smooth spring motion
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [12, -12]), {
    stiffness: 120,
    damping: 15,
  });

  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), {
    stiffness: 120,
    damping: 15,
  });

  const glowX = useSpring(useTransform(x, [-0.5, 0.5], ["0%", "100%"]));
  const glowY = useSpring(useTransform(y, [-0.5, 0.5], ["0%", "100%"]));

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();

    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1200,
      }}
      className="relative group rounded-2xl overflow-hidden border border-[#2a2a2a] bg-[#0b0b0b] shadow-xl hover:shadow-[0_0_40px_rgba(107,143,113,0.25)] transition-all duration-300"
    >
      {/* 🔥 CURSOR GLOW */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition"
        style={{
          background: "radial-gradient(circle at var(--x) var(--y), rgba(107,143,113,0.25), transparent 40%)",
        }}
      />

      {/* IMAGE SECTION */}
      <div
        className="h-52 md:h-72 relative overflow-hidden"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* dark overlay */}
        <div className="absolute inset-0 bg-black/25 group-hover:bg-black/50 transition duration-500" />

        {/* ✨ LIGHT SWEEP EFFECT */}
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.08), transparent 70%)",
            transform: "translateX(-100%)",
          }}
          animate={{ x: ["-100%", "100%"] }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "linear",
          }}
        />

        {/* BUTTONS */}
        <div className="absolute inset-0 flex items-center justify-center gap-5 opacity-0 group-hover:opacity-100 transition duration-500">

          <Link
            href={gitUrl}
            className="h-12 w-12 rounded-xl border border-green-400/40 bg-black/40 backdrop-blur-xl flex items-center justify-center hover:scale-110 hover:border-green-300 transition"
          >
            <CodeBracketIcon className="h-6 w-6 text-green-400" />
          </Link>

          <Link
            href={previewUrl}
            className="h-12 w-12 rounded-xl border border-green-400/40 bg-black/40 backdrop-blur-xl flex items-center justify-center hover:scale-110 hover:border-green-300 transition"
          >
            <EyeIcon className="h-6 w-6 text-green-400" />
          </Link>

        </div>
      </div>

      {/* CONTENT */}
      <div className="p-5 bg-gradient-to-b from-[#111] to-[#0c0c0c]">
        <h5 className="text-lg font-semibold text-green-400 mb-2">
          {title}
        </h5>

        <p className="text-sm text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;