import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaDivide, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [review , setReview] = useState(0)
  const {image,name} = people[review]
  return (
    <div className="article">
      <div className="img-container">
        <img src={image} className="person-img"/>
      </div>
    </div>
  )
};

export default Review;
