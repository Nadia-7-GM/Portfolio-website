"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className=" flex gap-2 flex-wrap">
        <Image
          src="/icons8-python-48.png"
          width={48}
          height={48}
          alt="python"
        ></Image>

        <a target="_blank" href="https://icons8.com/icon/40669/c%2B%2B">
          <Image
            src="/icons8-c-48.png"
            width={48}
            height={48}
            alt="C++"
          ></Image>
        </a>

        <a target="_blank" href="https://icons8.com/icon/108784/javascript">
          <Image
            src="/icons8-javascript-48.png"
            width={48}
            height={48}
            alt="C++"
          ></Image>
        </a>

        <a
          target="_blank"
          href="https://icons8.com/icon/uJM6fQYqDaZK/typescript"
        >
          <Image
            src="/icons8-typescript-96.png"
            width={48}
            height={48}
            alt="C++"
          ></Image>
        </a>

        <a
          target="_blank"
          href="https://icons8.com/icon/uJM6fQYqDaZK/typescript"
        >
          <Image
            src="/icons8-react-js-80.png"
            width={48}
            height={48}
            alt="React"
          ></Image>
        </a>

        <a
          target="_blank"
          href="https://icons8.com/icon/uJM6fQYqDaZK/typescript"
        >
          <Image
            src="/icons8-redux-48.png"
            width={48}
            height={48}
            alt="Redux"
          ></Image>
        </a>

        <a
          target="_blank"
          href="https://icons8.com/icon/uJM6fQYqDaZK/typescript"
        >
          <Image
            src="/icons8-node-js-48.png"
            width={48}
            height={48}
            alt="NodeJS"
          ></Image>
        </a>

        <a
          target="_blank"
          href="https://icons8.com/icon/uJM6fQYqDaZK/typescript"
        >
          <Image
            src="/icons8-django-48.png"
            width={48}
            height={48}
            alt="dJANGO"
          ></Image>
        </a>

        <a
          target="_blank"
          href="https://icons8.com/icon/uJM6fQYqDaZK/typescript"
        >
          <Image
            src="/icons8-tailwind-css-48.png"
            width={48}
            height={48}
            alt="tailwind"
          ></Image>
        </a>

        <a
          target="_blank"
          href="https://icons8.com/icon/uJM6fQYqDaZK/typescript"
        >
          <Image
            src="/icons8-postgresql-48.png"
            width={48}
            height={48}
            alt="PostgreSQL"
          ></Image>
        </a>

        <a
          target="_blank"
          href="https://icons8.com/icon/uJM6fQYqDaZK/typescript"
        >
          <Image
            src="/icons8-amazon-web-services-48.png"
            width={48}
            height={48}
            alt="AWS"
          ></Image>
        </a>
      </div>
    ),
  },
  {
  title: "Education",
  id: "education",
  content: (
    <ul className="list-disc pl-2">
      <li>
        Bachelor’s in Computer Science (In Progress)
      </li>
    </ul>
  ),
},
{
  title: "Course-Work",
  id: "certifications",
  content: (
    <ul className="list-disc pl-2">
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
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-photo.jpg"
          width={430}
          height={300}
          alt="about"
          className="rounded-full border-4 border-[#6b8f70] mx-auto mb-4 md:mb-0"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-green-300 mb-4 relative inline-block group">
  About Me
  <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-green-300 rounded transition-all duration-300 group-hover:w-full"></span>
</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a strong passion for building
            modern, interactive, and responsive web applications. I work with
            technologies like HTML, CSS, JavaScript, React, Next.js, PHP, and
            MySQL. I am continuously improving my skills in backend development,
            APIs, and cloud technologies. I enjoy solving real-world problems
            through code and building complete end-to-end applications. I am a
            quick learner and always excited to explore new technologies and
            improve my development skills.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Course-Work{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;