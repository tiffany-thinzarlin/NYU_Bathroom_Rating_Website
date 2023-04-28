import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "./navbar.component";

describe("Navbar", () => {
  test("renders navbar links", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    const homeLink = screen.getByText("NYU Bathroom Rating");
    const allReviewsLink = screen.getByText("All Reviews");
    const filterReviewLink = screen.getByText("Filter Review");
    const addReviewLink = screen.getByText("Add Review");
    const filterNameReviewLink = screen.getByText("Filter Review By Name");
    expect(homeLink).toBeInTheDocument();
    expect(allReviewsLink).toBeInTheDocument();
    expect(filterReviewLink).toBeInTheDocument();
    expect(addReviewLink).toBeInTheDocument();
    expect(filterNameReviewLink).toBeInTheDocument();
  });
});
