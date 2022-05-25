import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center bg-frost-200 py-12">
      <div className="w-full flex flex-col p-4 max-w-screen-2xl gap-4">
        <h1 className="w-full text-7xl text-center font-display font-bold text-polar-night-400">
          Projects
        </h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ProjectCard
            title="Real Tutor"
            liveUrl="https://realtutor.johncosta.tech/"
            gitUrl="https://github.com/JohnCosta27/RealTutorMERN"
          >
            <p className="text-xl text-snow-storm-100">
              A lesson and progress management system which allowed tutors at my
              company to schedule lessons, add repots and keep track of students
              progress. Built using the MERN stack.
            </p>
            <p className="text-xl text-snow-storm-100">
              Use the following credentitals to play around:
            </p>
            <ul className="text-lg text-snow-storm-100">
              <li>Username: 1@tutor.com</li>
              <li>Password: SafePassword123.</li>
            </ul>
          </ProjectCard>
          <ProjectCard
            title="Odin"
            liveUrl="https://odin.johncosta.tech/"
            gitUrl="https://github.com/JohnCosta27/Odin"
          >
            <p className="text-xl text-snow-storm-100">
              A revision tool which allows students to revise various subjects.
              Uses Auth0 for user sign ups.
            </p>
          </ProjectCard>
          <ProjectCard
            title="Restaurant ordering system"
            liveUrl="https://www.youtube.com/watch?v=BZY2Le_Szgg&t=1s&ab_channel=JohnCosta"
            gitUrl="https://github.com/JohnCosta27/"
          >
            <p className="text-xl text-snow-storm-100">
              A revision tool which allows students to revise various subjects.
              Year 2 Team Project, I was resposible for making the entire UI. I
              cannot release the source code, but there is a video.
            </p>
          </ProjectCard>
          <ProjectCard
            title="Disser"
            gitUrl="https://github.com/JohnCosta27/Disser-RoyalHackaway2022"
          >
            <p className="text-xl text-snow-storm-100">
              Royal Hackathon Project 2022. A real time social media which
              allows users to communicate with each other in real time. It also
              involves GPT-3 bots which communicate with each other and the
              users.
            </p>
          </ProjectCard>
          <ProjectCard
            title="Snake"
            gitUrl="https://github.com/JohnCosta27/Snake"
            liveUrl="https://johncosta27.github.io/Snake/"
          >
            <p className="text-xl text-snow-storm-100">
              My first big project. A classic snake game that adapts to the screen size you are on.
            </p>
    </ProjectCard>
        </div>
      </div>
    </div>
  );
};
export default Projects;
