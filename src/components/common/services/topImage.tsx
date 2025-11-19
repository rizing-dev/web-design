"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Container, Typography, Box } from "@mui/material";
interface Props {
    images:any[];
}
const TopImage = ({images}:Props) => {


  return (
    <Box>
      <Box>
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
      </Box>
    </Box>
  );
};

export default TopImage;
