//============================================================
// Essential Imports
//============================================================

import React from 'react';

//============================================================
// Imported Components
//============================================================

import AppearText from '../text/AppearText';

//============================================================
// Component
//============================================================

const FrontPage = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-polar-night-400">
      <div className="flex flex-col justify-center items-center">
        <AppearText className="font-mono text-7xl text-frost-400" text="JOHN COSTA" delay={100} />
        <AppearText className="font-mono text-5xl text-frost-200" text="DEVELOPER" delay={1200} />
      </div>
    </div>
  );
};
export default FrontPage;
