import React from "react";

const FadeComponent = ({ delay, children }) => {

  return (
    <div className="w-full bg-polar-night-400">
      <div
        className={
          "w-full transition-all ease-in-out duration-500"
        }
      >
        {children}
      </div>
    </div>
  );
};
export default FadeComponent;
