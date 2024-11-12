import React from "react";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ gallery }) => {
  return (
    <ul>
      {gallery.map((image) => {
        <li key={image.id}>
          <ImageCard />
        </li>;
      })}
    </ul>
  );
};

export default ImageGallery;
