import React from "react";
import GitHubMark from "./GitHubMark";

const ProjectCard = ({ title, liveUrl, gitUrl, children }) => {
  return (
    <div className="min-h-[400px] w-full rounded-lg flex flex-col bg-polar-night-400 p-4 shadow-md justify-between">
      <div className="w-full flex flex-col gap-2">
        <h2 className="text-4xl text-snow-storm-100">{title}</h2>
        {children}
      </div>
      <div className="w-full flex items-center gap-2 text-lg">
        <a href={liveUrl} className="w-full flex justify-center items-center h-12 rounded bg-aurora-green text-polar-night-200 hover:bg-aurora-orange transition-all text-xl">
          Live
        </a>
        <a href={gitUrl} className="w-full flex justify-center items-center h-12 rounded bg-snow-storm-200 hover:bg-polar-night-100 transition-all">
          <GitHubMark width="32" height="32" />
        </a>
      </div>
    </div>
  );
};
export default ProjectCard;
