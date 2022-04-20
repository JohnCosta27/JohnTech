//============================================================
// Essential Imports
//============================================================

import React from "react";
import clsx from "clsx";

//============================================================
// Component
//============================================================

const Cdiv = ({ className, children }) => {
  return (
    <div className={clsx("flex justify-center items-center", className)}>
      {children}
    </div>
  );
};
export default Cdiv;
