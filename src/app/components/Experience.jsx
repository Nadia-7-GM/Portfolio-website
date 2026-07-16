"use client";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Code2, Monitor, Database } from "lucide-react";

const experience_data = [
  {
    position: "Full Stack Web Developer",
    Company: "Personal Projects",
    duration: "2024 – Present",
    color_style: "rgb(31, 61, 43)",
    icon: <Code2 />,
    summary:
      "Building responsive full-stack web applications using React, PHP and MySQL with REST APIs, database integration and modern UI practices.",
  },
  {
    position: "Frontend Developer",
    Company: "Freelance & Practice Projects",
    duration: "2023 – 2024",
    color_style: "rgb(107, 143, 113)",
    icon: <Monitor />,
    summary:
      "Developed responsive interfaces using HTML, CSS, JavaScript and React while improving UI components and user experience.",
  },
  {
    position: "Backend & Database Developer",
    Company: "Academic Projects",
    duration: "2023 – Present",
    color_style: "rgb(194, 163, 93)",
    icon: <Database />,
    summary:
      "Built backend systems using PHP and MySQL with CRUD operations, authentication and frontend-backend integration.",
  },
];

const Experience = () => {
  return (
    <section className="py-10">

      {/* Heading */}
      <div className="text-center mt-4 mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-green-300 relative inline-block group">
          Experience
          <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-green-300 rounded transition-all duration-300 group-hover:w-full shadow-[0_0_10px_#6b8f71]"></span>
        </h2>
      </div>

      <VerticalTimeline
        lineColor="#ffffff"
        className="custom-timeline"
      >
        {experience_data.map((exp, index) => (
          <VerticalTimelineElement
            key={index}
            date={exp.duration}
            iconStyle={{
              background: exp.color_style,
              color: "#fff",
              boxShadow: `0 0 18px ${exp.color_style}`,
            }}
            contentStyle={{
              background: "rgba(24,24,24,0.88)",
              backdropFilter: "blur(10px)",
              border: `1px solid ${exp.color_style}`,
              color: "#fff",
              borderRadius: "18px",
              boxShadow: "0 10px 30px rgba(0,0,0,.35)",
            }}
            contentArrowStyle={{
              borderRight: `7px solid ${exp.color_style}`,
            }}
          >
            <div className="text-white mb-3 opacity-80">
              {exp.icon}
            </div>

            <h3 className="text-2xl font-bold hover:text-green-300 transition">
              {exp.position}
            </h3>

            <h4 className="text-gray-300 mt-2 mb-4">
              {exp.Company}
            </h4>

            <p className="text-gray-400 leading-8">
              {exp.summary}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>

    </section>
  );
};

export default Experience;