import React, { useState } from 'react';
import './Content.css';

function Cont() {
  const [horizontalImage, setHorizontalImage] = useState("https://m.media-amazon.com/images/I/61phtAjh38L._SY695_.jpg");
  const verticalImages = [
    "https://m.media-amazon.com/images/I/61LSRF8M0cL._SY695_.jpg",
    "https://m.media-amazon.com/images/I/71-HQbODhhL._SY695_.jpg",
    "https://m.media-amazon.com/images/I/61uYOOvdbaL._SY695_.jpg"
  ];

  const handleVerticalImageClick = (index) => {
    const tempImage = horizontalImage;
    setHorizontalImage(verticalImages[index]);
    verticalImages[index] = tempImage;
  };

  return (
    <div className="container">
      <div className="content-wrapper">
        <div className="image-container">
          <img
            src={horizontalImage}
            alt="Horizontal Image"
            className="horizontal-image"
          />
          <div className="vertical-images">
            {verticalImages.map((image, index) => (
              <div className="vertical-image" key={index} onClick={() => handleVerticalImageClick(index)}>
                <img src={image} alt={`Vertical Image ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cont;
