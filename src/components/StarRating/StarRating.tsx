import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { StarRatingProps } from "./StarRating.types";

const StarRating = ({ rating }: StarRatingProps) => {
  const stars = [];
  const totalStars = 5;

  for (let i = 0; i < totalStars; i++) {
    if (i < rating) {
      stars.push(<FaStar key={i} className="text-yellow-500 text-[30px]" />);
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      stars.push(
        <FaStarHalfAlt key={i} className="text-yellow-500 text-[30px]" />
      );
    } else {
      stars.push(<FaRegStar key={i} className="text-yellow-500 text-[30px]" />);
    }
  }

  return <div className="flex">{stars}</div>;
};

export default StarRating;
