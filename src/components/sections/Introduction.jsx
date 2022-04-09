import React from 'react';

const Introduction = () => {
  return (
    <div className="w-full flex h-[40vh] justify-center items-center bg-frost-200">
      <div className="w-full flex md:flex-row flex-col p-4 max-w-5xl gap-4">
        <div className="w-full">
          <h1 className="text-7xl font-display font-bold text-polar-night-400">Hi, I'm John</h1>
          <br />
          <p className="text-xl font-display text-polar-night-400">
            I am a BSc Computer Science student who loves to program. I a most intrested in
            full-stack development - taking an idea all the way to the end and creating a full
            application, I love working as part of a team and making project with friends. I am also
            a Linux Enthusiat and I run Garuda Linux as my main OS on all my machines.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Introduction;
