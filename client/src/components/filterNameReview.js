import { useState } from "react";
import "./reviews.css";

function FilterNameReview() {
  const [formData, setFormData] = useState({
    bathroom: "",
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
        `/filterNameReview?bathroom=${formData.bathroom}`
      );
      const data = await response.json();
      console.log(response);
      console.log(data);
      setReviews(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h2>Filter Reviews By Name</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="bathroom">Bathroom Name</label>
          <input
            type="text"
            id="bathroom"
            name="bathroom"
            value={formData.bathroom}
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

export default FilterNameReview;
