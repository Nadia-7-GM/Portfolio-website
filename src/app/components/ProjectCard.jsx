import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group overflow-hidden"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* subtle dark overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500" />

        {/* buttons container */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500">

          <Link
            href={gitUrl}
            className="h-14 w-14 border-2 border-green-400/70 rounded-full flex items-center justify-center backdrop-blur-sm bg-black/20 hover:bg-green-500/20 hover:border-green-300 transition"
          >
            <CodeBracketIcon className="h-7 w-7 text-green-400" />
          </Link>

          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 border-green-400/70 rounded-full flex items-center justify-center backdrop-blur-sm bg-black/20 hover:bg-green-500/20 hover:border-green-300 transition"
          >
            <EyeIcon className="h-7 w-7 text-green-400" />
          </Link>
        </div>
      </div>

      <div className="text-white rounded-b-xl mt-3 bg-green-950 py-6 px-4">
        <h5 className="text-xl font-semibold mb-2 text-green-400">
          {title}
        </h5>
        <p className="text-green-100">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;