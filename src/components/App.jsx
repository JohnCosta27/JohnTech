//============================================================
// Essential Imports
//============================================================

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//============================================================
// Pages
//============================================================

import FrontPage from "./pages/Front.page";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
