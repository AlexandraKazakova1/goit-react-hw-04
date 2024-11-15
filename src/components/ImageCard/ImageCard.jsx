import React from "react";

const ImageCard = ({ image, onClick }) => {
  return (
    <div>
      <img
        onClick={() => onClick(image.urls.regular)}
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
};

export default ImageCard;
