import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-md">
        <Link to="/" className="navbar-brand">
          NYU Bathroom Rating
        </Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/reviews" className="nav-link">
                All Reviews
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/filterReview" className="nav-link">
                Filter Review
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/addReview" className="nav-link">
                Add Review
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/filterNameReview" className="nav-link">
                Filter Review By Name
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
