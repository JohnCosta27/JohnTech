//============================================================
// Essential Imports
//============================================================

import React, { useState, useEffect } from 'react';
import clsx from 'clsx';

//============================================================
// Component
//============================================================

const AppearText = ({ text, delay, className }) => {
  const [showText, setShowText] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText('opacity-100');
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <h1 className={clsx('transition-all ease-in-out delay-1000 opacity-0', className, showText)}>
        {text}
      </h1>
    </>
  );
};
export default AppearText;
