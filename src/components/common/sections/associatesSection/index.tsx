import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  Container,
  useTheme,
} from "@mui/material";
import aepsImage from "../../../../../public/banksImages/aeps.png";
import bbpsImage from "../../../../../public/banksImages/bbps.png";
import ekoPayImage from "../../../../../public/banksImages/eko_india_logo.jpeg";

const associations = [
  { name: "Eko", src: ekoPayImage },
  { name: "AEPS", src: aepsImage },
  { name: "BBPS", src: bbpsImage },
];

const AssociationsSection = () => {
  const theme = useTheme(); // For theme usage

  return (
    <Container maxWidth="lg">
      <Box sx={{ textAlign: "center", py: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          sx={{
            fontSize: { xs: "2rem", sm: "2rem" },
            color: theme.palette.primary.main,
          }}
        >
          OUR ASSOCIATIONS
        </Typography>
        <Box
          sx={{
            width: 120,
            height: 4,
            backgroundColor: theme.palette.primary.main,
            margin: "auto",
            mb: 3,
          }}
        />
        <Grid container spacing={3} justifyContent="center">
          {associations.map((item, index) => (
            <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
              <Card
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: 3,
                  borderRadius: 2,
                  p: 2,
                  height: 120,
                  transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth hover effect
                  "&:hover": {
                    transform: "scale(1.05)", // Slight zoom effect
                    boxShadow: `0 10px 20px ${theme.palette.primary.light}`, // Hover shadow
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={item.src.src}
                  alt={item.name}
                  sx={{
                    maxWidth: "80%",
                    height: "auto",
                    transition: "all 0.3s ease", // Smooth scaling for the image
                  }}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default AssociationsSection;
