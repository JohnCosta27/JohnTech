import React from "react";
import GitHubMark from "./GitHubMark";

const ProjectCard = ({ title, description }) => {
  return (
    <div className="min-h-[400px] w-full rounded-lg flex flex-col bg-polar-night-400 p-4 shadow-md justify-between">
      <div className="w-full flex flex-col gap-2">
        <h2 className="text-4xl text-snow-storm-100">{title}</h2>
        <p className="text-lg text-snow-storm-100">{description}</p>
      </div>
      <div className="w-full flex items-center gap-2 text-lg">
        <button className="w-full h-12 rounded bg-aurora-green text-polar-night-200 hover:bg-aurora-orange transition-all">
          Live
        </button>
        <button className="w-full flex justify-center items-center h-12 rounded bg-snow-storm-200 hover:bg-polar-night-100 transition-all">
          <GitHubMark width="32" height="32" />
        </button>
      </div>
    </div>
  );
};
export default ProjectCard;
