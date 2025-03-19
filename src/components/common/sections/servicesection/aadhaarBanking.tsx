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

const ServiceSectionAadhaarBanking = () => {
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
          <Grid container spacing={3} alignItems="center">
            {/* Left Side - Image */}
            <Grid item xs={12} md={6} display="flex" justifyContent="center">
              <img
                src={
                  "https://finkeda.com/wp-content/uploads/2024/09/Aadhaar-Banking.png"
                }
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
                  sx={{ textTransform: "none" }} // Add uppercase for emphasis
                >
                  AePS (Aadhaar Banking)
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
                  Customers can now perform easy, reliable, and safe aadhaar
                  banking services such as cash withdrawals to balance enquiry
                  (Through AePS), making every transaction easier for people in
                  small towns. Our AePS services are designed to provide a
                  seamless banking experience to customers in remote areas.
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

export default ServiceSectionAadhaarBanking;
