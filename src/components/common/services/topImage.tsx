"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Container, Typography, Box } from "@mui/material";

const TopImage = () => {
  const images = [
    "https://finkeda.com/wp-content/uploads/2024/12/Travel-service-website-banner-copy.jpg",
    "https://finkeda.com/wp-content/uploads/2024/12/Insurance-website-banner-copy.jpg",
    "https://finkeda.com/wp-content/uploads/2024/12/PAN-CARD-website-banner-copy.jpg",
  ];

  return (
    <Box>
      <Container maxWidth="lg">
        <Box textAlign="center" mb={2}>
          <Typography variant="h5" fontWeight="bold">
            <span style={{ color: "#ff4081" }}>Rizing Pay</span>-{" "}
            <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
              " Empowering Rural India with Seamless Digital Banking and Fintech
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

export default TopImage;
