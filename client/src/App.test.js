import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Reviews from "./Reviews";
import AddReview from "./AddReview";
import "./index.css";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/reviews">Reviews</Link>
            </li>
            <li>
              <Link to="/add-review">Add Review</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/reviews">
            <Reviews />
          </Route>
          <Route path="/add-review">
            <AddReview />
          </Route>
          <Route path="/">
            <h1>Welcome to Bathroom Reviews</h1>
            <p>Check out reviews from other users or add your own review!</p>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
