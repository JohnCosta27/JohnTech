import React from "react";
import GitHubMark from "./GitHubMark";
import PropTypes from "prop-types";

const ProjectCard = ({ title, liveUrl, gitUrl, children }) => {
  const getLiveUrl = () => {
    if (liveUrl.length == 1) {
      return (
        <div className="w-full flex justify-center items-center h-12 rounded bg-aurora-orange text-polar-night-200 transition-all text-xl">
          No Live :(
        </div>
      );
    }
    return (
      <a
        href={liveUrl}
        className="w-full flex justify-center items-center h-12 rounded bg-aurora-green text-polar-night-200 hover:bg-aurora-orange transition-all text-xl"
      >
        Live
      </a>
    );
  };
  return (
    <div className="min-h-[400px] w-full rounded-lg flex flex-col bg-polar-night-400 p-4 shadow-md justify-between">
      <div className="w-full flex flex-col gap-2">
        <h2 className="text-4xl text-snow-storm-100">{title}</h2>
        {children}
      </div>
      <div className="w-full flex items-center gap-2 text-lg">
        {getLiveUrl()}
        <a
          href={gitUrl}
          className="w-full flex justify-center items-center h-12 rounded bg-snow-storm-200 hover:bg-polar-night-100 transition-all"
        >
          <GitHubMark width="32" height="32" />
        </a>
      </div>
    </div>
  );
};

ProjectCard.defaultProps = {
  title: "Default Title",
  liveUrl: "/",
  gitUrl: "/",
};

export default ProjectCard;
