import React from "react";
import {
  Award,
  Calendar,
  ExternalLink,
  BadgeCheck,
} from "lucide-react";

const certifications = [
  {
   title: "Google AI Essentials",
    issuer: "Google • Coursera",
    date: "Aug 2025",
    credential: "ABC123XYZ",
   link: "https://coursera.org/verify/specialization/M305L33211K3",
    color_style: "rgb(31, 61, 43)",
  },
   {
    title: "Foundations of Cybersecurity",
    issuer: "Google • Coursera",
    date: "Dec 2025",
    credential: "K1NTZ1KZUVON",
    link: "https://coursera.org/verify/K1NTZ1KZUVON",
    color_style: "rgb(107, 143, 113)",
  },
  {
    title: "Google UX Design Professional Certificate",
    issuer: "Google • Coursera",
    date: "Aug 2025",
    credential: "LEWZAX3NLQGZ",
    link: "https://coursera.org/verify/professional-cert/LEWZAX3NLQGZ",
    color_style: "rgb(194, 163, 93)",
  },
  {
    title: "Foundations of Project Management",
    issuer: "Google • Coursera",
    date: "Dec 2025",
    credential: "91QXAHTYBOIW",
    link: "https://coursera.org/verify/9IQXAHTYBOIW",
    color_style: "rgb(31, 61, 43)",
  },
];

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="min-h-screen bg-black/[0.02] py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-green-300 font-semibold uppercase tracking-[0.25em]">
            My Credentials
          </p>

          <h2 className="text-5xl font-bold text-green-300 relative inline-block group mt-3">
            Certifications
            <span className="absolute left-0 -bottom-2 w-0 h-[3px] bg-green-300 rounded transition-all duration-300 group-hover:w-full shadow-[0_0_10px_#6b8f71]"></span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-relaxed">
            Continuous learning is part of my journey. These certifications
            demonstrate my commitment to AI, backend engineering, cloud
            computing, and modern software development.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2">

          {certifications.map((item, index) => (
            <div
              key={index}
              style={{
                background: "rgba(24,24,24,0.85)",
                backdropFilter: "blur(10px)",
                border: `1px solid ${item.color_style}`,
                boxShadow: "0 0 25px rgba(0,0,0,0.4)",
              }}
              className="rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(107,143,113,0.35)]"
            >
              {/* Icon */}
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center text-white mb-6"
                style={{
                  background: item.color_style,
                  boxShadow: `0 0 15px ${item.color_style}`,
                }}
              >
                <Award size={30} />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white hover:text-green-300 transition-colors duration-300">
                {item.title}
              </h3>

              {/* Issuer */}
              <h4 className="text-green-300 mt-2 font-medium">
                {item.issuer}
              </h4>

              {/* Details */}
              <div className="mt-6 space-y-4 text-gray-400">

                <div className="flex items-center gap-3">
                  <Calendar size={18} className="text-green-300" />
                  <span>{item.date}</span>
                </div>

                <div className="flex items-center gap-3">
                  <BadgeCheck size={18} className="text-green-300" />
                  <span>{item.credential}</span>
                </div>

              </div>

              {/* Button */}
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-8 text-green-300 font-semibold hover:gap-3 transition-all duration-300"
              >
                View Certificate
                <ExternalLink size={18} />
              </a>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Certifications;