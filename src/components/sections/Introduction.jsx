import React from 'react';
import { Link } from 'react-router-dom';

const Introduction = () => {
  return (
    <div className="w-full flex h-auto justify-center items-center bg-frost-200">
      <div className="w-full flex md:flex-row flex-col p-4 max-w-5xl gap-4">
        <div className="w-full flex flex-col gap-4 font-display text-polar-night-400">
          <h1 className="text-7xl font-bold">Hi, I'm John</h1>
          <p className="text-xl">
            I am a BSc Computer Science student who loves to program. I a most intrested in
            full-stack development - taking an idea all the way to the end and creating a full
            application, I love working as part of a team and making project with friends. I am also
            a Linux Enthusiat and I run Garuda Linux as my main OS on all my machines. Furthermore,
            I am a private tutor for GCSE and A-level Maths and Computer Science.
          </p>
          <p className="text-xl">
            I have worked on an extensive number of projects, such as making my own tutoring company
            whilst at university, creating a web based revision application for my students, and
            creating the frontend for a{' '}
            <a
              href="https://tensor.software/"
              className="font-semibold hover:text-aurora-red text-aurora-orange transition-all underline cursor-pointer">
              secure datasharing startup.
            </a>
          </p>
          <h2 className="text-3xl font-bold mt-16">Technologies I work with:</h2>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 items-center px-8">
            <ul className="w-3/4 list-disc flex flex-col gap-2 text-lg">
              <li>JavaScript / TypeScript</li>
              <li className="ml-2">Both frontend and backend</li>
              <li>Node.js</li>
              <li>Golang</li>
              <li>React</li>
              <li>PostgreSQL</li>
              <li className="ml-2">Including hosting and managing my own databases</li>
            </ul>
            <ul className="w-3/4 list-disc flex flex-col gap-2 text-lg">
              <li>Linux Management</li>
              <li className="ml-2">I have hosted and managed several linux servers</li>
              <li>MongoDB</li>
              <li>Java</li>
              <li>Wordpress</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Introduction;
