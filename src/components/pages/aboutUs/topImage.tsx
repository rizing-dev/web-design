"use client";
import React from "react";

const TopImage = () => {
  return (
    <div>
      <img
        src="https://finkeda.com/wp-content/uploads/2025/01/About-us-page-banner-copy.jpg"
        alt="slide-0"
        style={{
          width: "100%", // Ensure full width within the container
          height: "auto", // Adjust height to your preference
          objectFit: "cover", // Ensures the image covers the full space
          borderRadius: "10px",
        }}
      />
    </div>
  );
};

export default TopImage;
