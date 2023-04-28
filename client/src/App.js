//import React, { useEffect, useState } from "react";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar.component";
import Reviews from "./components/reviews";
import AddReview from "./components/addReview";
import MainPage from "./components/mainpage";
import FilterReview from "./components/filterReview";
import FilterNameReview from "./components/filterNameReview.js";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/filterNameReview" element={<FilterNameReview />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/addReview" element={<AddReview />} />
        <Route path="/filterReview" element={<FilterReview />} />
      </Routes>
    </Router>
  );
}
export default App;
