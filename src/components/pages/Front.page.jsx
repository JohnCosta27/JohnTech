//============================================================
// Essential Imports
//============================================================

import React from "react";

//============================================================
// Imported Components
//============================================================

import AppearText from "../text/AppearText";
import Cdiv from "../core/Cdiv";
import FadeComponent from "../core/FadeComponent";
import Introduction from "../sections/Introduction";
import Experience from "../sections/Experience";

//============================================================
// Component
//============================================================

const DELAY = 0;

const FrontPage = () => {
  return (
    <>
      <div className="w-full h-screen bg-polar-night-400">
        <Cdiv className="w-full h-32 py-6 px-24">
          <Cdiv className="w-full h-full gap-2">
            <Cdiv className="flex-1 h-full">
              <AppearText
                className="font-display text-2xl text-snow-storm-300 cursor-pointer hover:text-3xl hover:text-snow-storm-100"
                text="About Me"
                delay={DELAY * 2.5}
              />
            </Cdiv>
            <Cdiv className="flex-1 h-full">
              <AppearText
                className="font-display text-2xl text-snow-storm-300 cursor-pointer hover:text-3xl hover:text-snow-storm-100"
                text="Experience"
                delay={DELAY * 2.5}
              />
            </Cdiv>
            <Cdiv className="flex-1 h-full">
              <AppearText
                className="font-display text-2xl text-snow-storm-300 cursor-pointer hover:text-3xl hover:text-snow-storm-100"
                text="Projects"
                delay={DELAY * 2.5}
              />
            </Cdiv>
          </Cdiv>
        </Cdiv>
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
        </FadeComponent>
        <FadeComponent delay={DELAY * 2.5}>
          <Experience />
        </FadeComponent>
      </div>
    </>
  );
};
export default FrontPage;
