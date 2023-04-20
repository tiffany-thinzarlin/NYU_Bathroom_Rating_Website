import React, { useState, useEffect } from "react";
import "./reviews.css";
function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>Reviews</h1>
      {reviews.length ? (
        <table>
          <thead>
            <tr>
              <th>Bathroom</th>
              <th>Rating</th>
              <th>Review</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review) => (
              <tr key={review.id}>
                <td>{review.bathroom}</td>
                <td>{review.rating}</td>
                <td>{review.review ? review.review : "No review available"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No reviews available</p>
      )}
    </div>
  );
}

export default Reviews;
