import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-green  border-green-400 shadow-md shadow-green-500/30"
    : "text-green-200 border-green-700 hover:border-green-500 hover:text-green-500";

  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer transition-all duration-300`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;