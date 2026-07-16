"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Socials_data } from "../constants/social_media";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const AchievementsSection = () => {
  return (
    <div className="py-12 px-6 xl:px-16">

      {/* HEADING (FIXED + CONSISTENT SYSTEM) */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl font-bold text-green-300 relative inline-block group">
          Socials
          <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-green-300 rounded transition-all duration-300 group-hover:w-full shadow-[0_0_10px_#6b8f71]"></span>
        </h1>
      </motion.div>

      {/* CARD CONTAINER */}
      {/* CARD CONTAINER */}
<motion.div
  variants={fadeUp}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.7 }}
  className="
    border border-[#2a2a2a]
    rounded-2xl
    bg-[#121212]/70
    backdrop-blur-md
    shadow-[0_0_30px_rgba(0,0,0,0.4)]
    hover:shadow-[0_0_25px_rgba(107,143,113,0.15)]
    transition-all duration-300
    py-8 sm:py-10
    px-5 sm:px-8
  "
>
  {/* MOBILE = 2x2 GRID | DESKTOP = FLEX */}
  <div
    className="
      grid grid-cols-2 gap-5
      sm:flex sm:flex-wrap sm:justify-between sm:items-center
    "
  >
    {Socials_data.map((data, index) => (
      <Link
        key={index}
        href={data.social_login}
        target="_blank"
        className="group"
      >
        <div
          className="
            flex items-center justify-center
            rounded-2xl
            bg-[#111827]
            border border-[#2a2a2a]

            w-full
            h-24
            sm:w-24 sm:h-24

            transition-all duration-300 ease-out

            hover:-translate-y-2
            hover:scale-105
            hover:border-green-400/40
            hover:shadow-[0_0_30px_rgba(107,143,113,0.35)]

            active:scale-95
            active:border-green-400/60
            active:shadow-[0_0_35px_rgba(107,143,113,0.45)]
          "
        >
          <Image
            src={data.path}
            width={55}
            height={55}
            alt={data.alt}
            className="
              w-10 h-10
              sm:w-12 sm:h-12

              opacity-80
              transition-all duration-300

              group-hover:opacity-100
              group-hover:rotate-6
              group-hover:scale-110

              group-active:scale-110
            "
          />
        </div>
      </Link>
    ))}
  </div>
</motion.div>
    </div>
  );
};

export default AchievementsSection;