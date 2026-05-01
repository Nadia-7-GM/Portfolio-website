"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion, AnimatePresence } from "framer-motion";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="flex gap-3 flex-wrap">

        {[
          { src: "/icons8-python-48.png", alt: "Python" },
          { src: "/icons8-c-48.png", alt: "C++" },
          { src: "/icons8-javascript-48.png", alt: "JavaScript" },
          { src: "/icons8-typescript-96.png", alt: "TypeScript" },
          { src: "/icons8-react-js-80.png", alt: "React" },
          { src: "/icons8-redux-48.png", alt: "Redux" },
          { src: "/icons8-node-js-48.png", alt: "NodeJS" },
          { src: "/icons8-django-48.png", alt: "Django" },
          { src: "/icons8-tailwind-css-48.png", alt: "Tailwind" },
          { src: "/icons8-postgresql-48.png", alt: "PostgreSQL" },
          { src: "/icons8-amazon-web-services-48.png", alt: "AWS" },
        ].map((icon, i) => (
          <div
            key={i}
            className="p-3 rounded-xl bg-[#121212]/70 backdrop-blur-md
            border border-[#2a2a2a]
            hover:border-green-400/40
            hover:shadow-[0_0_18px_rgba(107,143,113,0.25)]
            hover:-translate-y-1
            transition-all duration-300"
          >
            <Image
              src={icon.src}
              width={48}
              height={48}
              alt={icon.alt}
              className="hover:scale-110 transition-transform duration-300"
            />
          </div>
        ))}

      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2 space-y-2 text-[#ADB7BE]">
        <li>Bachelor’s in Computer Science (In Progress)</li>
      </ul>
    ),
  },
  {
    title: "Course-Work",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2 space-y-2 text-[#ADB7BE]">
        <li>Full Stack Web Development (HTML, CSS, JavaScript)</li>
        <li>React & Next.js</li>
        <li>PHP & MySQL</li>
        <li>Python Programming</li>
        <li>DBMS</li>
        <li>AWS Cloud Fundamentals</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white scroll-mt-24" id="about">

      <div className="md:grid md:grid-cols-2 gap-10 items-center py-8 px-4 xl:px-16 sm:py-16">

        {/* IMAGE (FIXED SIZE + NO LAYOUT BREAK) */}
        <div className="flex justify-center items-center">
          <div className="w-[325px] h-[325px] md:w-[380px] md:h-[380px] overflow-hidden rounded-xl border border-[#2a2a2a]
            shadow-[0_0_25px_rgba(107,143,112,0.25)]
            group">

            <Image
              src="/images/about-photo.jpg"
              width={500}
              height={500}
              alt="about"
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
            />

          </div>
        </div>

        {/* TEXT */}
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">

          {/* HEADING */}
          <h2 className="text-4xl font-bold text-green-300 mb-4 relative inline-block group">
            About Me
            <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-green-300 rounded transition-all duration-300 group-hover:w-full shadow-[0_0_10px_#6b8f71]"></span>
          </h2>

          {/* DESCRIPTION */}
          <p className="text-[#ADB7BE] hover:text-white transition-colors duration-300 leading-relaxed">
            I am a full stack web developer with a strong passion for building
            modern, interactive, and responsive web applications. I work with
            HTML, CSS, JavaScript, React, Next.js, PHP, and MySQL. I enjoy
            building scalable systems and solving real-world problems.
          </p>

          {/* TABS */}
          <div className="flex mt-8 gap-2">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Course-Work
            </TabButton>
          </div>

          {/* CONTENT (SMOOTH SWITCH) */}
          <div className="mt-8">

            <AnimatePresence mode="wait">
              <motion.div
                key={tab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {TAB_DATA.find((t) => t.id === tab).content}
              </motion.div>
            </AnimatePresence>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;