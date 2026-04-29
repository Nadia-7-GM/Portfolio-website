"use client";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Code2, Monitor, Database } from "lucide-react";


const experience_data = [
  {
    "position": "Full Stack Web Developer (Personal Projects)",
    "Company": "Self-Learning / Portfolio Work",
    "duration": "2024 – Present",
    "color_style": "rgb(31, 61, 43)", // deep green
    "summary": "Building full stack web applications using HTML, CSS, JavaScript, React, PHP, and MySQL. Focused on developing responsive UI, backend APIs, and database integration while continuously improving system design and performance."
  },
  {
    "position": "Frontend Developer",
    "Company": "Freelance & Practice Projects",
    "duration": "2023 – 2024",
    "color_style": "rgb(107, 143, 113)", // soft green
    "summary": "Developed interactive and responsive user interfaces using HTML, CSS, JavaScript, and React. Worked on UI components, layouts, and improving user experience with modern frontend practices."
  },
  {
    "position": "Backend & Database Projects",
    "Company": "Academic / Learning Projects",
    "duration": "2023 – Present",
    "color_style": "rgb(194, 163, 93)", // gold accent
    "summary": "Built backend logic and database systems using PHP and MySQL. Worked on CRUD operations, form handling, authentication concepts, and integrating frontend with backend systems."
  }
];

const Experience = () => {
  return (
    <section>
     <div className="text-center mt-4 mb-8 md:mb-12">
  <h2 className="text-4xl font-bold text-green-300 relative inline-block group">
    Experience
    <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-green-300 rounded transition-all duration-300 group-hover:w-full"></span>
  </h2>
</div>

      <VerticalTimeline>
      {experience_data.map((experience, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{ background: experience.color_style, color: "#fff" }}
            contentArrowStyle={{ borderRight: `7px solid ${experience.color_style}` }}
            date={experience.duration}
            iconStyle={{ background: experience.color_style, color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">{experience.position}</h3>
            <h4 className="vertical-timeline-element-subtitle">{experience.Company}</h4>
            <p>{experience.summary}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
