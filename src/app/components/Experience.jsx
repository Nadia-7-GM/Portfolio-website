"use client";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Code2, Monitor, Database } from "lucide-react";

const experience_data = [
  {
    position: "Full Stack Web Developer (Personal Projects)",
    Company: "Self-Learning / Portfolio Work",
    duration: "2024 – Present",
    color_style: "rgb(31, 61, 43)",
    icon: <Code2 />,
    summary:
      "Building full stack web applications using HTML, CSS, JavaScript, React, PHP, and MySQL. Focused on responsive UI, backend APIs, and database integration while improving system design and performance.",
  },
  {
    position: "Frontend Developer",
    Company: "Freelance & Practice Projects",
    duration: "2023 – 2024",
    color_style: "rgb(107, 143, 113)",
    icon: <Monitor />,
    summary:
      "Developed interactive and responsive user interfaces using HTML, CSS, JavaScript, and React. Improved UI components and user experience with modern frontend practices.",
  },
  {
    position: "Backend & Database Projects",
    Company: "Academic / Learning Projects",
    duration: "2023 – Present",
    color_style: "rgb(194, 163, 93)",
    icon: <Database />,
    summary:
      "Built backend logic and database systems using PHP and MySQL. Worked on CRUD operations, authentication concepts, and frontend-backend integration.",
  },
];

const Experience = () => {
  return (
    <section className="py-10">

      {/* TITLE */}
      <div className="text-center mt-4 mb-12">
        <h2 className="text-4xl font-bold text-green-300 relative inline-block group">
          Experience
          <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-green-300 rounded transition-all duration-300 group-hover:w-full shadow-[0_0_10px_#6b8f71]"></span>
        </h2>
      </div>

      <VerticalTimeline>

        {experience_data.map((exp, index) => (
          <VerticalTimelineElement
            key={index}
            date={exp.duration}
            iconStyle={{
              background: exp.color_style,
              color: "#fff",
              boxShadow: `0 0 15px ${exp.color_style}`,
            }}
            contentStyle={{
              background: "rgba(24, 24, 24, 0.85)",
              backdropFilter: "blur(10px)",
              border: `1px solid ${exp.color_style}`,
              color: "#fff",
              borderRadius: "12px",
              boxShadow: `0 0 25px rgba(0,0,0,0.4)`,
            }}
            contentArrowStyle={{
              borderRight: `7px solid ${exp.color_style}`,
            }}
          >

            {/* ICON */}
            <div className="text-white mb-2 opacity-80">
              {exp.icon}
            </div>

            {/* TITLE */}
            <h3 className="text-xl font-bold hover:text-green-300 transition-colors duration-300">
              {exp.position}
            </h3>

            {/* COMPANY */}
            <h4 className="text-sm text-gray-300 mb-2">
              {exp.Company}
            </h4>

            {/* DESCRIPTION */}
            <p className="text-gray-400 leading-relaxed hover:text-white transition-colors duration-300">
              {exp.summary}
            </p>

          </VerticalTimelineElement>
        ))}

      </VerticalTimeline>
    </section>
  );
};

export default Experience;