// rating.jsx

import React from 'react';
import ReactStars from 'react-stars';

const RatingComponent = ({ size, count, color, activeColor, value, a11y, isHalf, emptyIcon, halfIcon, filledIcon }) => {
  const ratingExample = {
    size,
    count,
    color,
    activeColor,
    value,
    a11y,
    isHalf,
    emptyIcon,
    halfIcon,
    filledIcon
  };

  return (
    <div>
      <h3>Rating Component</h3>
      <ReactStars {...ratingExample} />
    </div>
  );
}

const rate = () => {
  return (
    <div>
      <RatingComponent
        size={50}
        count={5}
        color="black"
        activeColor="yellow"
        value={0}
        a11y={true}
        isHalf={true}
        emptyIcon={<i className="far fa-star" />}
        halfIcon={<i className="fa fa-star-half-alt" />}
        filledIcon={<i className="fa fa-star" />}
      />
    </div>
  );
}

export default rate;
