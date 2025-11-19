import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image"; // Use <img> if not using Next.js

interface Props {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  reverse: boolean;
}

const MidServiceSection = ({
  title,
  subtitle,
  description,
  image,
  reverse,
}: Props) => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          p: { xs: 3, md: 6 }, // Add larger padding for better spacing
          my: 6, // Increase margin for separation between sections
          borderRadius: 6, // Increased border radius for modern look
          backgroundColor: "#ffffff",
          boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.12)", // Softer, more pronounced shadow
          transition: "transform 0.3s ease, box-shadow 0.3s ease", // Add transition effects
          "&:hover": {
            transform: "translateY(-5px)", // Slight lift on hover
            boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.2)", // Enhance shadow on hover
          },
        }}
      >
        <Grid
          container
          spacing={6}
          alignItems="center"
          direction={reverse ? "row-reverse" : "row"}
        >
          {/* Text Section */}
          <Grid item xs={12} md={6}>
            <Typography variant="h4" color="primary" sx={{ lineHeight: 1.3 }}>
              {title}
            </Typography>
            <Typography
              variant="h6"
              fontStyle="italic"
              color="text.secondary"
              mt={2}
              sx={{ lineHeight: 1.5 }} // Improve line spacing
            >
              {subtitle}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              mt={4} // Increase margin top to give text more room
              sx={{
                lineHeight: 1.7, // Improve line height for body text
                letterSpacing: "0.02em", // Slight letter spacing to improve readability
              }}
            >
              {description}
            </Typography>
          </Grid>

          {/* Image Section */}
          <Grid item xs={12} md={6} display="flex" justifyContent="center">
            <Image
              src={image}
              alt={title}
              width={500} // Slightly increase image width
              height={350} // Slightly increase image height
              style={{
                borderRadius: 16, // Larger border radius for a more modern look
                boxShadow: "0px 12px 20px rgba(0,0,0,0.2)", // Softer shadow for the image
                transition: "transform 0.3s ease", // Add transition on hover
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              } // Zoom on hover
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              } // Reset zoom
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default MidServiceSection;
