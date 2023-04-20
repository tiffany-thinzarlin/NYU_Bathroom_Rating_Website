//import React, { useEffect, useState } from "react";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar.component";
import Reviews from "./components/reviews";
import AddReview from "./components/addReview";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/addReview" element={<AddReview />} />
      </Routes>
    </Router>
  );
}
export default App;
