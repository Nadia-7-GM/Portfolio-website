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
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="border border-[#2a2a2a] rounded-2xl py-10 px-8
                   bg-[#121212]/70 backdrop-blur-md
                   shadow-[0_0_30px_rgba(0,0,0,0.4)]
                   hover:shadow-[0_0_25px_rgba(107,143,113,0.15)]
                   transition-all duration-300"
      >

        {/* ICONS */}
        <div className="flex flex-wrap justify-center sm:justify-between items-center gap-10">

          {Socials_data.map((data, index) => (
            <Link
              key={index}
              href={data.social_login}
              target="_blank"
              className="group transition-transform duration-300 hover:scale-110"
            >
              <div className="p-3 rounded-xl bg-[#111827]
                              border border-[#2a2a2a]
                              group-hover:border-green-400/40
                              group-hover:shadow-[0_0_20px_rgba(107,143,113,0.25)]
                              transition-all duration-300">

                <Image
                  src={data.path}
                  width={55}
                  height={55}
                  alt={data.alt}
                  className="opacity-80 group-hover:opacity-100 transition duration-300"
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