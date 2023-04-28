import { useState } from "react";
import "./reviews.css";

function FilterReview() {
  const [formData, setFormData] = useState({
    minRating: "",
    maxRating: "",
  });
  const [reviews, setReviews] = useState([]);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Formdata info", formData);
    try {
      const response = await fetch(
        `/filterReview?minRating=${formData.minRating}&maxRating=${formData.maxRating}`
      );
      const data = await response.json();
      console.log(response);
      console.log(data);
      setReviews(data);
      /*
      const filteredReviews = data.filter((review) => {
        return (
          review.rating >= parseInt(formData.minRating) &&
          review.rating <= parseInt(formData.maxRating)
        );
      });
      setReviews(filteredReviews);*/
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h2>Filter Reviews</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="minRating">Minimum Rating</label>
          <input
            type="number"
            id="minRating"
            name="minRating"
            min="1"
            max="5"
            value={formData.minRating}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="maxRating">Maximum Rating</label>
          <input
            type="number"
            id="maxRating"
            name="maxRating"
            min="1"
            max="5"
            value={formData.maxRating}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Filter</button>
      </form>
      {reviews.length > 0 ? (
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
        <p>No reviews to display</p>
      )}
    </div>
  );
}

export default FilterReview;
