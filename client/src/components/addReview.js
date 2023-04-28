import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddReview() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    bathroom: "",
    review: "",
    rating: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    setErrors({
      ...errors,
      [event.target.name]: null,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = {};
    if (!formData.bathroom) {
      validationErrors.bathroom = "Bathroom is required";
    }
    if (!formData.rating) {
      validationErrors.rating = "Rating is required";
    }
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log("Formdata info", formData);
    try {
      const response = await fetch("/addReview", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log(response);

      if (response.ok) {
        navigate("/reviews");
      } else {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h2>Add a Review</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="bathroom">Bathroom</label>
          <input
            type="text"
            id="bathroom"
            name="bathroom"
            value={formData.bathroom}
            onChange={handleChange}
          />
          {errors.bathroom && <span>{errors.bathroom}</span>}
        </div>
        <div>
          <label htmlFor="rating">Rating</label>
          <input
            type="number"
            id="rating"
            name="rating"
            min="1"
            max="5"
            value={formData.rating}
            onChange={handleChange}
          />
          {errors.rating && <span>{errors.rating}</span>}
        </div>
        <div>
          <label htmlFor="review">Review</label>
          <textarea
            id="review"
            name="review"
            value={formData.review}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddReview;
