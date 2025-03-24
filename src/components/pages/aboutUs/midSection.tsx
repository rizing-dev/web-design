import { Box, Typography, Container, Grid } from "@mui/material";

const MidSection = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Grid container spacing={4} alignItems="center">
        {/* Text Section */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" color="success.main" gutterBottom>
            WELCOME TO
          </Typography>
          <Typography
            variant="h3"
            color="primary"
            fontWeight={700}
            gutterBottom
          >
            Rizing Pay
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            In many small towns and remote areas, it has been a daunting task
            for people to attain banking services. Not just that, distant bank
            branches often mean long, costly journeys just to perform basic
            transactions. This consequently leads to substantial inconvenience
            and money problems.
          </Typography>
          <Typography
            variant="body1"
            fontStyle="italic"
            color="text.secondary"
            paragraph
          >
            <strong>At Rizing Pay</strong>, we understand this problem and
            strive to resolve it. We’re on a mission to bring fundamental
            financial services directly to these underserved areas. By offering
            local merchants closest to your place, we offer a wide range of
            services right in the community, from money transfers to
            Aadhaar-enabled banking services to micro ATMs and utility payment,
            travel ticketing, PAN card applications, and loan EMI collections.
          </Typography>
          <Typography variant="body1" color="text.secondary">
            <strong>Rizing Pay</strong> is not just about providing services;
            it’s about transforming financial access and empowering local
            businesses. Our innovative payment solutions and robust support help
            merchants become key financial hubs in their communities, making
            banking even more seamless and more accessible for everyone.
          </Typography>
        </Grid>

        {/* Image Section */}
        <Grid item xs={12} md={6}>
          <Box display="flex" justifyContent="center">
            <img
              src="https://finkeda.com/wp-content/uploads/2024/09/About-Us.png"
              alt="About Finkeda"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MidSection;
