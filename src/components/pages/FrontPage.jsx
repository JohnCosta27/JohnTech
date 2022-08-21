//============================================================
// Essential Imports
//============================================================

import React from "react";
import '../../index.css';

//============================================================
// Imported Components
//============================================================

import AppearText from "../text/AppearText";
import FadeComponent from "../core/FadeComponent";
import Introduction from "../sections/Introduction";
import Experience from "../sections/Experience";
import Projects from '../sections/Projects';

//============================================================
// Component
//============================================================

const DELAY = 0;

const FrontPage = () => {
  return (
    <>
      <div className="w-full h-screen bg-polar-night-400">
        <div className="w-full h-3/5 flex justify-center items-center">
          <div className="flex flex-col gap-4 justify-center items-center">
            <AppearText
              className="font-display font-bold text-7xl text-frost-400"
              text="JOHN COSTA"
              delay={DELAY}
            />
            <AppearText
              className="font-display font-bold text-5xl text-frost-200"
              text="DEVELOPER"
              delay={DELAY * 2}
            />
          </div>
        </div>
        <FadeComponent delay={DELAY * 2.5}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              className="fill-frost-200"
              d="M0,192L120,202.7C240,213,480,235,720,240C960,245,1200,235,1320,229.3L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            ></path>
          </svg>
        </FadeComponent>
        <FadeComponent delay={DELAY * 2.5}>
          <Introduction />
          <Experience />
          <Projects />
        </FadeComponent>
      </div>
    </>
  );
};
export default FrontPage;
