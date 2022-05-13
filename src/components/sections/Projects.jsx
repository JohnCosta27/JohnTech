import React from "react";
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center bg-frost-200 py-12">
      <div className="w-full flex flex-col p-4 max-w-screen-2xl gap-4">
        <h1 className="w-full text-7xl text-center font-display font-bold text-polar-night-400">
          Projects
        </h1>
        <div className="w-full grid grid-cols-3 gap-4">
          <ProjectCard title="Real Tutor" liveUrl="/" gitUrl="/">
            <p className="text-xl text-snow-storm-100">A lesson and progress management system which allowed tutors at my company to schedule lessons, add repots and keep track of students progress. Built using the MERN stack.</p>
          </ProjectCard>
          <ProjectCard title="Hello World" description="Hello World again lol" /> 
          <ProjectCard title="Hello World" description="Hello World again lol" /> 
          <ProjectCard title="Hello World" description="Hello World again lol" /> 
          <ProjectCard title="Hello World" description="Hello World again lol" /> 
        </div>
      </div>
    </div>
  );
};
export default Projects;
