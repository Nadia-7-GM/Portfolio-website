"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >

          {/* HEADING */}
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">

            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1f3d2b] via-[#6b8f71] to-[#c2a35d] hover:brightness-110 transition duration-300">
              Hello, I&apos;m{" "}
            </span>

            <br />

            <motion.span
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="inline-block"
            >
              <TypeAnimation
                sequence={[
                  "Nadia Awan",
                  2000,
                  "Web Developer",
                  2000,
                  "Backend Dev.",
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
            className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl max-w-xl"
          >
            Full Stack Web Developer, looking for opportunities in Web Development or Software Development roles.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link
              href="/contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4
              bg-gradient-to-br from-[#1f3d2b] via-[#6b8f71] to-[#c2a35d]
              hover:scale-105 hover:shadow-lg hover:shadow-[#6b8f71]/30
              transition-all duration-300 text-white"
            >
              Hire Me
            </Link>

            <Link
              href="https://drive.google.com/file/d/1-0G3H0dJqBDGmx7az8-jqJunqMBK7DUg/view?usp=drive_link"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full
              bg-gradient-to-br from-[#1f3d2b] via-[#6b8f71] to-[#c2a35d]
              hover:scale-105 transition-all duration-300 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-[#1f3d2b] rounded-full px-5 py-2 transition">
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
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >

          {/* glow layer */}
          <div className="relative group">

            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#6b8f71]/30 to-[#c2a35d]/20 blur-2xl group-hover:blur-3xl transition-all duration-500" />

            <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden border border-white/10 group-hover:border-[#6b8f71]/40 transition">

              <Image
                src="/images/heroine.png"
                alt="hero image"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full group-hover:scale-105 transition duration-500"
                width={400}
                height={400}
              />

            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;