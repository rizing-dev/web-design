import {
  Card,
  CardContent,
  Grid,
  Typography,
  Box,
  Container,
} from "@mui/material";

const VisionMission = () => {
  return (
    <Container>
      <Box
        sx={{ py: 5, background: "linear-gradient(135deg, #eef2f3, #ffffff)" }}
      >
        <Grid container spacing={4} justifyContent="center">
          {/* Our Vision */}
          <Grid item xs={12} md={5}>
            <Card
              sx={{
                p: 4,
                borderRadius: 3,
                boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#ffffff",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  color="primary"
                  gutterBottom
                >
                  Our Vision
                </Typography>
                <Typography
                  variant="body1"
                  fontStyle="italic"
                  color="text.secondary"
                  mt={1}
                >
                  Through our modern-day financial solutions,
                </Typography>
                <Typography variant="body2" mt={1} color="text.secondary">
                  we strive to transform small-town areas and become India’s
                  leading financial solution provider. We are committed to
                  offering easily accessible, instant, and safe financial
                  services that can manage your money seamlessly.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Our Mission */}
          <Grid item xs={12} md={5}>
            <Card
              sx={{
                p: 4,
                borderRadius: 3,
                boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#ffffff",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  color="primary"
                  gutterBottom
                >
                  Our Mission
                </Typography>
                <Typography
                  variant="body1"
                  fontWeight="bold"
                  color="text.secondary"
                  mt={1}
                >
                  At{" "}
                  <span style={{ fontStyle: "italic", color: "#3f51b5" }}>
                    Rizing Pay
                  </span>
                  ,
                </Typography>
                <Typography variant="body2" mt={1} color="text.secondary">
                  we strive to uplift remote India by making advanced financial
                  technology both easy to access and seamless. Our focus is on
                  providing easy, reliable, and effective financial solutions
                  that support the growth of India, ensuring that everyone, no
                  matter how remote, can benefit from modern-day banking
                  services.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default VisionMission;
