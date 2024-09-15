import React from "react";
import Home from "./Home";
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import Recipe from "./Recipe";
import { Route, Routes, BrowserRouter } from "react-router-dom";

const Pages = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searchResults/:search" element={<Searched />} />
        <Route path="/recipe/:id" element={<Recipe />} />
      </Routes>
  );
};

export default Pages;
