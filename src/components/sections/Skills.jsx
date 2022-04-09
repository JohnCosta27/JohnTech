import React from 'react';

const Skills = () => {
  return (
    <div className="w-full flex h-[40vh] justify-center  items-center bg-frost-200">
      <div className="w-full fle md:flex-row flex-col p-4 max-w-5xl gap-4">
        <div className="w-full flex flex-col gap-4">
          <h1 className="text-7xl text-center font-display font-bold text-polar-night-400">
            Skills
          </h1>
          <div className="w-full flex flex-col list-disc"></div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
