"use client";

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="py-12 lg:py-16 px-5 sm:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="order-2 lg:order-1 lg:col-span-7 text-center lg:text-left"
        >
          {/* HEADING */}
          <h1 className="break-words text-white font-extrabold leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">

            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1f3d2b] via-[#6b8f71] to-[#c2a35d]">
              Hello, I&apos;m
            </span>

            <br />

            <motion.span
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="inline-block mt-2"
            >
              <TypeAnimation
                sequence={[
                  "Nadia Awan",
                  2000,
                  "Web Dev.",
                  2000,
                  "Backend Dev",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-white hover:text-[#c2a35d] transition"
              />
            </motion.span>
          </h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mt-6 max-w-2xl mx-auto lg:mx-0"
          >
            Full Stack Web Developer passionate about building scalable,
            responsive, and user-friendly web applications. Seeking
            opportunities in Web Development, Backend Engineering, and Software
            Development.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-10"
          >
            <Link
              href="/contact"
              className="px-8 py-3 rounded-full text-white font-medium
              bg-gradient-to-r from-[#1f3d2b] via-[#6b8f71] to-[#c2a35d]
              hover:scale-105 hover:shadow-lg hover:shadow-[#6b8f71]/30
              transition-all duration-300"
            >
              Hire Me
            </Link>

            <Link
              href="https://drive.google.com/file/d/1-0G3H0dJqBDGmx7az8-jqJunqMBK7DUg/view?usp=drive_link"
              target="_blank"
              className="rounded-full bg-gradient-to-r from-[#1f3d2b] via-[#6b8f71] to-[#c2a35d] p-[2px] hover:scale-105 transition-all duration-300"
            >
              <span className="block rounded-full bg-[#121212] hover:bg-[#1f3d2b] px-8 py-3 text-white transition">
                Download CV
              </span>
            </Link>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.03 }}
          className="order-1 lg:order-2 lg:col-span-5 flex justify-center"
        >
          <div className="relative group">

            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#6b8f71]/30 to-[#c2a35d]/20 blur-3xl group-hover:blur-[70px] transition-all duration-500"></div>

            {/* Image Container */}
            <div
              className="
                relative overflow-hidden rounded-full
                border border-white/10
                bg-[#181818]
                transition-all duration-500
                group-hover:border-[#6b8f71]/40
                w-[220px] h-[220px]
                sm:w-[260px] sm:h-[260px]
                md:w-[320px] md:h-[320px]
                lg:w-[400px] lg:h-[400px]
              "
            >
              <Image
                src="/images/heroine.png"
                alt="Nadia Awan"
                fill
                priority
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;