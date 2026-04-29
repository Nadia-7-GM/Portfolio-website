"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  
  {
    id: 1,
    title: "Age Calculator Web App",
    description:
      "Developed a simple and interactive web application that calculates a user's exact age based on input date of birth. Focused on clean UI and accurate date calculations using JavaScript. Technologies used: HTML, CSS, JavaScript",
    image: "/images/projects/age-calc.png",
    tag: ["All", "Mobile", ],
    gitUrl: "https://github.com/Nadia-7-GM/CodeAlpha_AgeCalculator",
    previewUrl: "https://nadia-7-gm.github.io/CodeAlpha_AgeCalculator/",
  },
  {
    id: 2,
    title: "ToDo List Web Application",
    description:
      "Built a responsive ToDo List web application that allows users to add, delete, and manage daily tasks efficiently. Focused on DOM manipulation and clean user experience. Technologies used: HTML, CSS, JavaScript",
    image: "/images/projects/to-do-list.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Nadia-7-GM/CodeAlpha-ToDo_List",
    previewUrl: "https://nadia-7-gm.github.io/CodeAlpha-ToDo_List/",
  },
  {
    id: 3,
    title: "Courier Management System",
    description:
      "Developed a Courier Management System to manage parcel records, tracking, and basic operations using a Java-based application. Includes structured data handling and system workflow for managing courier services efficiently.",
    image: "/images/projects/courier-delivery.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Nadia-7-GM/Corier-Management-System-Java",
    previewUrl: "/images/projects/courier-management-video.mp4",
  },

  {
    id: 4,
    title: "Furniro-Ecommerce-Website",
    description:"Furniro is a fully functional E-commerce Website designed to provide a seamless shopping experience for users looking to purchase furniture online.",
    image: "/images/projects/image.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Nadia-7-GM/Furniro-Ecommerce-Website",
    previewUrl: "https://furniro-ecommerce-website.vercel.app/",
  },
 
  
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

 return (
  <section id="projects">

    {/* Heading */}
    <div className="text-center mt-4 mb-8 md:mb-12">
      <h2 className="text-4xl font-bold text-green-300 relative inline-block group">
        My Projects
        <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-green-300 rounded transition-all duration-300 group-hover:w-full"></span>
      </h2>
    </div>

    {/* Tags */}
    <div className="text-green-200 flex flex-row justify-center items-center gap-3 py-6">
      <ProjectTag
        onClick={handleTagChange}
        name="All"
        isSelected={tag === "All"}
      />
      <ProjectTag
        onClick={handleTagChange}
        name="Web"
        isSelected={tag === "Web"}
      />
      <ProjectTag
        onClick={handleTagChange}
        name="Mobile"
        isSelected={tag === "Mobile"}
      />
    </div>

    {/* Projects Grid */}
    <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
      {filteredProjects.map((project, index) => (
        <motion.li
          key={index}
          variants={cardVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          transition={{ duration: 0.3, delay: index * 0.4 }}
        >
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        </motion.li>
      ))}
    </ul>

  </section>
);
};

export default ProjectsSection;
