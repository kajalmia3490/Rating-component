import { useState } from "react";
import styles from "./rating.module.css";

const Rating = () => {
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [submitBtn, setSubmitBtn] = useState("Submit");

  const rates = [1, 2, 3, 4, 5];
  // star click button
  const handleStarClick = (starValue) => {
    setRating(starValue);
  };
  // submit button
  const handleSubmit = () => {
    console.log("Submitted rating:", rating);
    setSubmitted(true);
    setSubmitBtn("Submitted");
  };
  // reset button
  const handleReset = () => {
    setRating(0);
    setSubmitBtn("Submit");
    setSubmitted(false);
  };

  return (
    <div>
      <div>
        {rates.map((value) => (
          <span
            key={value}
            onClick={() => handleStarClick(value)}
            className={styles.ratingIcon}
            style={{
              color: value <= rating ? "orange" : "gray",
            }}
          >
            &#9733;
          </span>
        ))}
      </div>
      <p className={styles.btnGroup}>
        <button className={styles.submitBtn} onClick={handleSubmit}>
          {submitBtn}
        </button>
        <button className={styles.resetBtn} onClick={handleReset}>
          Reset
        </button>
      </p>
      {submitted && (
        <h3 className={styles.ratingHead}>
          You've rated <span className={styles.ratingNum}>{rating}</span> out of{" "}
          <span className={styles.ratingNum}>5</span>
        </h3>
      )}
    </div>
  );
};

export default Rating;
