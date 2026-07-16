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
      <div className="flex gap-3 flex-wrap justify-center sm:justify-start">
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
            className="p-3 rounded-xl bg-[#121212]/70 backdrop-blur-md border border-[#2a2a2a]
            hover:border-green-400/40 hover:shadow-[0_0_18px_rgba(107,143,113,0.25)]
            hover:-translate-y-1 transition-all duration-300"
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
      <ul className="list-disc pl-5 space-y-2 text-[#ADB7BE]">
        <li>Bachelor&apos;s in Computer Science (In Progress)</li>
        <li>Intermediate in Pre-Engineering</li>
        <li>Matriculation in Science</li>
      </ul>
    ),
  },

  {
    title: "Course-Work",
    id: "certifications",
    content: (
      <ul className="list-disc pl-5 space-y-2 text-[#ADB7BE]">
        <li>Full Stack Web Development</li>
        <li>React & Next.js</li>
        <li>PHP & MySQL</li>
        <li>Python Programming</li>
        <li>Database Management Systems</li>
        <li>AWS Cloud Fundamentals</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-white scroll-mt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-12 px-5 sm:px-8 xl:px-16">

        {/* LEFT IMAGE (Desktop Only) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="hidden md:flex justify-center"
        >
          <div
            className="
              w-[340px] h-[340px]
              lg:w-[380px] lg:h-[380px]
              overflow-hidden
              rounded-2xl
              border border-[#2a2a2a]
              shadow-[0_0_25px_rgba(107,143,112,0.25)]
              group
            "
          >
            <Image
              src="/images/about-photo.jpg"
              alt="About Nadia"
              width={500}
              height={500}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col"
        >
          {/* Heading */}
       <div className="text-center mb-5">
  <h2 className="inline-block text-3xl sm:text-4xl lg:text-5xl font-bold text-green-300 relative group">
    About Me
    <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-green-300 rounded transition-all duration-300 group-hover:w-full shadow-[0_0_10px_#6b8f71]" />
  </h2>
</div>

          {/* Mobile Image */}
          <div className="flex justify-center mb-6 md:hidden">
            <div
              className="
                w-[240px] h-[240px]
                overflow-hidden
                rounded-2xl
                border border-[#2a2a2a]
                shadow-[0_0_25px_rgba(107,143,112,0.25)]
                group
              "
            >
              <Image
                src="/images/about-photo.jpg"
                alt="About Nadia"
                width={500}
                height={500}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Mobile Description */}
          <p className="block sm:hidden text-[#ADB7BE] leading-7 text-[15px] text-center">
            Computer Science student and aspiring Full-Stack Software Engineer passionate about building modern web applications using React, Next.js, Python, AI, and cloud technologies.
          </p>

          {/* Desktop Description */}
          <p className="hidden sm:block text-[#ADB7BE] hover:text-white transition-colors duration-300 leading-8 text-base lg:text-lg">
            Hi, I&apos;m Nadia — a Computer Science student and aspiring Full-Stack Software Engineer focused on building modern, scalable, and impactful web applications.

            <br /><br />

            I work with React, Next.js, JavaScript, Python, Node.js, Tailwind CSS, and SQL while continuously expanding my expertise in AI, automation, backend systems, and cloud technologies.

            <br /><br />

            I enjoy transforming ideas into clean, efficient, and user-focused digital solutions while constantly learning and growing as a software engineer.
          </p>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center sm:justify-start gap-3 mt-8">
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

          {/* Content */}
          <div className="mt-8 min-h-[180px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={tab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                {TAB_DATA.find((t) => t.id === tab).content}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;