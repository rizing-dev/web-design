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
import microAtmImage from "../../../../../public/services.png";
import Image from "next/image";
import insuranceImage2 from "../../../../../public/newImages/home/bbps2.png";
const ServiceSectionUtilityBillPayment = () => {
  return (
    <Box
      sx={{
        // backgroundColor: "#e0f7fa", // Lighter shade of blue background
        py: 6, // Padding for top and bottom
        // minHeight: "100vh", // Ensure the section takes up full height
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
          <Grid container spacing={3} alignItems="center">
            {/* Right Side - Text */}
            <Grid item xs={12} md={6} display="flex" justifyContent="center">
              <CardContent>
                <Typography
                  variant="h5"
                  color="primary"
                  fontWeight="bold"
                  sx={{ textTransform: "uppercase" }} // Add uppercase for emphasis
                >
                  Utility Bill Payment
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
                  Rizing Payis a one-stop solution for all your banking needs,
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

            {/* Left Side - Image */}
            <Grid item xs={12} md={6}>
              <img
                src={
                  // 'https://finkeda.com/wp-content/uploads/2024/10/Utility-Payments-2.png'
                  insuranceImage2.src
                }
                alt="Fintech illustration"
                width={600}
                height={300} // Adjusted height for better proportion
                style={{ borderRadius: "8px", objectFit: "cover" }} // Rounded corners
              />
            </Grid>
          </Grid>
        </Card>
      </Container>
    </Box>
  );
};

export default ServiceSectionUtilityBillPayment;
