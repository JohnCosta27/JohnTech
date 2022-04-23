import React, { useState, useEffect } from "react";
import clsx from "clsx";
import Tensorcrypt from "./Tensorcrypt";
import Realtutor from "./Realtutor";
import Webdev from './Webdev';

const Experience = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [animationClasses, setAnimationClasses] = useState("opacity-100");

  const changeText = (index) => {
    setAnimationClasses("opacity-0");
    setTimeout(() => {
      setAnimationClasses("opacity-100");
      setCurrentSection(index);
    }, 250);
  };

  /**
   * This could be done with React-router,
   * However this makes the animations easier - no need to over complciate it.
   */
  const getText = (index) => {
    if (index == 0) {
      return <Tensorcrypt />;
    } else if (index == 1) {
      return <Realtutor />;
    } else {
      return <Webdev />;
    }
  };

  return (
    <div className="w-full flex flex-col justify-center  items-center bg-frost-200 py-12">
      <div className="w-full flex md:flex-row flex-col p-4 max-w-5xl gap-4">
        <div className="w-full flex flex-col gap-4">
          <h1 className="text-7xl text-center font-display font-bold text-polar-night-400">
            Experience
          </h1>
        </div>
      </div>
      <div className="w-3/4 flex justify-center px-4">
        <div className="w-full max-w-7xl flex bg-polar-night-400 py-4 rounded-md">
          <div className="w-12 flex flex-col justify-between items-center h-96 relative">
            <div className="w-8 h-8 flex justify-center items-center">
              <div
                className="w-4 h-4 bg-frost-200 rounded-full z-20 hover:w-6 hover:h-6 transition-all"
                onClick={() => changeText(0)}
              ></div>
            </div>
            <div className="w-8 h-8 flex justify-center items-center">
              <div
                className="w-4 h-4 bg-frost-200 rounded-full z-20 hover:w-6 hover:h-6 transition-all"
                onClick={() => changeText(1)}
              ></div>
            </div>
            <div className="w-8 h-8 flex justify-center items-center">
              <div
                className="w-4 h-4 bg-frost-200 rounded-full z-20 hover:w-6 hover:h-6 transition-all"
                onClick={() => changeText(2)}
              ></div>
            </div>
            <div className="w-1 h-full bg-blue-500 absolute rounded-full"></div>
          </div>
          <div className="w-24 h-full flex flex-col justify-between">
            <div className="h-8 flex items-center">
              <p className="text-lg text-snow-storm-300">Tensorcrypt</p>
            </div>
            <div className="h-8 flex items-center">
              <p className="text-lg text-snow-storm-300">Real Tutor</p>
            </div>
            <div className="h-8 flex items-center">
              <p className="text-lg text-snow-storm-300">Web dev</p>
            </div>
          </div>
          <div className={clsx("w-full h-full p-4 flex flex-col items-center")}>
            <div
              className={clsx(
                "w-3/4 flex flex-col items-center transition-all",
                animationClasses
              )}
            >
              {getText(currentSection)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Experience;
