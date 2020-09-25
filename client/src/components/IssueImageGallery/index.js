import React from "react";
import ImageThumb from "./ImageThumb";
import "./style.css";

export default function IssueImageGallery({ images, issueDesc }) {
  return (
    <div>
      {images.map((imageUrl) => {
        return (
          <ImageThumb
            key={imageUrl}
            imageUrl={imageUrl}
            issueDesc={issueDesc}
          />
        );
      })}
    </div>
  );
}
