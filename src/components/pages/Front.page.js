//============================================================
// Essential Imports
//============================================================

import React from 'react';

//============================================================
// Imported Components
//============================================================

import AppearText from '../text/AppearText';
import Cdiv from '../core/Cdiv';
import FadeComponent from '../core/FadeComponent';

//============================================================
// Component
//============================================================

const FrontPage = () => {
  return (
    <>
      <div className="w-full h-screen bg-polar-night-400">
        <Cdiv className="w-full h-32 py-6 px-24">
          <Cdiv className="w-full h-full gap-2">
            <Cdiv className="flex-1 h-full">
              <AppearText
                className="font-mono text-2xl text-snow-storm-300 cursor-pointer hover:text-3xl hover:text-snow-storm-100"
                text="Option #1"
                delay={2500}
              />
            </Cdiv>
            <Cdiv className="flex-1 h-full">
              <AppearText
                className="font-mono text-2xl text-snow-storm-300 cursor-pointer hover:text-3xl hover:text-snow-storm-100"
                text="Option #2"
                delay={2500}
              />
            </Cdiv>
            <Cdiv className="flex-1 h-full">
              <AppearText
                className="font-mono text-2xl text-snow-storm-300 cursor-pointer hover:text-3xl hover:text-snow-storm-100"
                text="Option #3"
                delay={2500}
              />
            </Cdiv>
          </Cdiv>
        </Cdiv>
        <div className="w-full h-3/5 flex justify-center items-center">
          <div className="flex flex-col gap-4 justify-center items-center">
            <AppearText
              className="font-display font-bold text-7xl text-frost-400"
              text="JOHN COSTA"
              delay={750}
            />
            <AppearText
              className="font-display font-bold text-5xl text-frost-200"
              text="DEVELOPER"
              delay={1500}
            />
          </div>
        </div>
        <FadeComponent delay={2500}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              className="fill-frost-200"
              fill-opacity="1"
              d="M0,96L80,85.3C160,75,320,53,480,58.7C640,64,800,96,960,101.3C1120,107,1280,85,1360,74.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </FadeComponent>
      </div>
      <Cdiv className="bg-frost-200"></Cdiv>
    </>
  );
};
export default FrontPage;
