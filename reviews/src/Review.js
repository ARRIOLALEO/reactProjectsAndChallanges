import React, { useState } from "react";
import people from "./data";
import {
  FaChevronLeft,
  FaChevronRight,
  FaDivide,
  FaQuoteRight,
} from "react-icons/fa";

const Review = () => {
  const [review, setReview] = useState(0);
  const { image, name, text, job } = people[review];
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button
          className="prev-btn"
          onClick={() => {
            review - 1 < 0
              ? setReview(people.length - 1)
              : setReview((prevReview) => prevReview - 1);
          }}
        >
          <FaChevronLeft />
        </button>
        <button
          className="next-btn"
          onClick={() => {
            review + 1 >= people.length
              ? setReview(0)
              : setReview((prevReview) => prevReview + 1);
          }}
        >
          <FaChevronRight />
        </button>
      </div>
    </article>
  );
};

export default Review;
