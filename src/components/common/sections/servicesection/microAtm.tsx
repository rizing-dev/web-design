import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  Box,
  Container,
} from "@mui/material";
//  To Do : Change the image path to the correct one
import microAtmImage from "../../../../../public/newImages/home/matm1.png";


const ServiceSectionMicroATM = () => {
  return (
    <Box
      sx={{
        py: 6,
      }}
    >
      <Container maxWidth={"lg"}>
        <Card
          sx={{
            // display: "flex",
            // p: 4,
            // boxShadow: 8,
            // borderRadius: 2,
            backgroundColor: "#f5f5f5", // White background for the card  backgroundColor: "#f5f5f5" }}
          }}
        >
          <Grid container spacing={2} alignItems="center">
            {/* Left Side - Image */}
            <Grid item xs={12} md={6} display="flex" justifyContent="center">
              <img
                src={microAtmImage.src}
                alt="Fintech illustration"
                width={600}
                height={300} // Adjusted height for better proportion
                style={{ borderRadius: "8px", objectFit: "cover" }} // Rounded corners
              />
            </Grid>

            {/* Right Side - Text */}
            <Grid item xs={12} md={6}>
              <CardContent>
                <Typography
                  variant="h5"
                  color="primary"
                  fontWeight="bold"
                  sx={{ textTransform: "uppercase" }} // Add uppercase for emphasis
                >
                  Micro ATM
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  mt={2}
                  sx={{
                    lineHeight: 1.6, // Improve readability with line spacing
                    fontSize: "1rem", // Slightly larger font for better readability
                  }}
                >
                  mATM is a one-stop solution for all your banking needs,
                  whether it's balance inquiries, mini statement prints, or cash
                  withdrawals.
                  <strong> RIzing Pay </strong> merchant simplifies your
                  financial transactions while offering convenience near your
                  home.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    mt: 3,
                    backgroundColor: "#00796b", // Slightly darker shade for the button
                    "&:hover": {
                      backgroundColor: "#004d40", // Darker hover effect
                    },
                  }}
                >
                  Read More
                </Button>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </Box>
  );
};

export default ServiceSectionMicroATM;
