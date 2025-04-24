"use client";
import React from "react";

import aboutusImage from "../../../../public/newImages/home/About Us.png";
import Image from "next/image";

const TopImage = () => {
  return (
    <div>
      <img
        src={aboutusImage.src}
        alt="slide-0"
        style={{
          // width: "100%", // Ensure full width within the container
          // height: "450px", // Adjust height to your preference
          objectFit: "cover", // Ensures the image covers the full space
          borderRadius: "10px",
        }}
      />
    </div>
  );
};

export default TopImage;
