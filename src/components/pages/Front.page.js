//============================================================
// Essential Imports
//============================================================

import React from 'react';

//============================================================
// Imported Components
//============================================================

import AppearText from '../text/AppearText';
import Cdiv from '../core/Cdiv';

//============================================================
// Component
//============================================================

const FrontPage = () => {
  return (
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
          <AppearText className="font-mono text-7xl text-frost-400" text="JOHN COSTA" delay={750} />
          <AppearText className="font-mono text-5xl text-frost-200" text="DEVELOPER" delay={1500} />
        </div>
      </div>
    </div>
  );
};
export default FrontPage;
