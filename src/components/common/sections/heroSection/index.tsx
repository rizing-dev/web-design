"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Container, Typography, Box } from "@mui/material";
import image1 from "../../../../../public/newImages/bbps1.jpg";
import image2 from "../../../../../public/newImages/dm1.jpg";
import image3 from "../../../../../public/newImages/pancard1.jpg";
import image4 from "../../../../../public/newImages/travel1.jpg";
import image5 from "../../../../../public/newImages/matm1.jpg";
import image6 from "../../../../../public/newImages/Insurance final (1).png";
import image7 from "../../../../../public/newImages/pancard1.jpg";

const ImageHeroSection = () => {
  const images = [
    image1.src,
    image6.src,
    image2.src,
    image3.src,
    image4.src,
    image5.src,
    image7.src,
  ];

  return (
    <Box>
      <Container maxWidth="lg">
        <Box textAlign="center" mb={2}>
          <Typography variant="h5" fontWeight="bold">
            <span style={{ color: "#ff4081" }}>Rizing Pay</span>-{" "}
            <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
              " Empowering Rural BHARAT with Seamless Digital Banking and Fintech
              Solutions "
            </span>
          </Typography>
        </Box>

        {/* Swiper Image Slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          style={{ borderRadius: "10px", overflow: "hidden" }}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`slide-${index}`}
                style={{
                  width: "100%", // Ensure full width within the container
                  height: "auto", // Adjust height to your preference
                  objectFit: "cover", // Ensures the image covers the full space
                  borderRadius: "10px",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

export default ImageHeroSection;
