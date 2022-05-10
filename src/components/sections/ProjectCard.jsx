import React from "react";

const ProjectCard = ({ title, description }) => {
  return (
    <div className="w-full rounded-lg flex flex-col bg-polar-night-400 px-2 py-2 shadow-md">
      <h2 className="text-2xl text-snow-storm-100">{title}</h2>
      <p className="text-md text-snow-storm-100">{description}</p>
    </div>
  );
};
export default ProjectCard;
