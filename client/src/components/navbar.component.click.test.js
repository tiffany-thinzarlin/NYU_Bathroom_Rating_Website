import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./navbar.component";
import Reviews from "./reviews";
import FilterReview from "./filterReview";
import AddReview from "./addReview";
import FilterNameReview from "./filterNameReview";

describe("Navbar", () => {
  test("navigates to the correct route when links are clicked", () => {
    const { getByRole, container } = render(
      <Router>
        <Navbar />
        <Routes>
          <Route path="/reviews" Component={Reviews} />
          <Route path="/filterReview" Component={FilterReview} />
          <Route path="/addReview" Component={AddReview} />
          <Route path="/filterNameReview" Component={FilterNameReview} />
        </Routes>
      </Router>
    );
    const allReviewsLink = getByRole("link", { name: "All Reviews" });
    const filterReviewLink = getByRole("link", { name: "Filter Review" });
    const addReviewLink = getByRole("link", { name: "Add Review" });
    const filterNameReviewLink = getByRole("link", {
      name: "Filter Review By Name",
    });
    fireEvent.click(allReviewsLink);
    expect(getByRole("heading", { name: "Reviews" })).toBeInTheDocument();
    fireEvent.click(filterReviewLink);
    expect(
      getByRole("heading", { name: "Filter Reviews" })
    ).toBeInTheDocument();
    fireEvent.click(addReviewLink);
    expect(getByRole("heading", { name: "Add a Review" })).toBeInTheDocument();
    fireEvent.click(filterNameReviewLink);
    expect(
      getByRole("heading", { name: "Filter Reviews By Name" })
    ).toBeInTheDocument();
  });
});
