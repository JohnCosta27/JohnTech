//============================================================
// Essential Imports
//============================================================

import clsx from "clsx";
import React, { useEffect, useState } from "react";

//============================================================
// Component
//============================================================

const FadeComponent = ({ delay, children }) => {
  const [showComponent, setShowComponent] = useState("opacity-0");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponent("opacity-100");
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="w-full bg-polar-night-400">
      <div
        className={clsx(
          "w-full transition-all ease-in-out duration-500 ",
          showComponent
        )}
      >
        {children}
      </div>
    </div>
  );
};
export default FadeComponent;
