import { Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import peopleImage from "../../../../public/customers image/about men final.png";


const WelcomeSection = () => {
  return (
    <Container maxWidth="lg">
      <Grid
        container
        spacing={4}
        alignItems="center"
        sx={{
          px: { xs: 2, md: 10 },
          py: 5,
          borderRadius: 2,
        }}
      >
        <Grid item xs={12} md={6}>
          <Typography
            variant="h3"
            fontWeight="bold"
            color="primary.main"
            sx={{
              fontSize: { xs: "1rem", sm: "2rem" },
              textTransform: "none",
            }}
          >
            Unstoppable.
          </Typography>
          <Typography
            variant="h4"
            fontWeight="bold"
            color="primary.main"
            sx={{
              fontSize: { xs: "1.5rem", sm: "2rem" },
              lineHeight: 1.3,
              mt: 1,
              letterSpacing: 1,
            }}
          >
            Ambition: जिद्द आगे रहने की
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mt: 3,
              fontSize: { xs: "1rem", sm: "1.125rem" },
              lineHeight: 1.7,
              color: "text.primary",
            }}
          >
            A strong determination to make India a financially inclusive nation
            is the driving force behind all our initiatives.{" "}
            <strong>
              We are determined to provide easy access to financial services to
              everyone, everywhere.
            </strong>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mt: 2,
              fontSize: { xs: "1rem", sm: "1.125rem" },
              lineHeight: 1.7,
              color: "text.primary",
            }}
          >
            In this journey, we are joined by our committed retail community,
            our partners, who form the force multiplier to our initiatives.{" "}
            <strong>
              We are determined to ensure our retail partners grow and prosper
              in this digital age and together we contribute to a stronger
              India.
            </strong>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mt: 3,
              color: "primary.main",
              fontWeight: "bold",
              fontSize: { xs: "1.1rem", sm: "1.25rem" },
              letterSpacing: 1.5,
            }}
          >
            This determination to create a digitally forward and financially
            inclusive India forms the cornerstone of our brand DNA.
          </Typography>
        </Grid>

        {/* Right Image Content */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
            borderRadius: 2,
          }}
        >
          <Image
            src={peopleImage.src}
            alt="People"
            width={500}
            height={400}
            style={{
              maxWidth: "100%",
              height: "auto",
              borderRadius: "16px", // Rounded corners on the image
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)", // Subtle shadow for a polished look
              objectFit: "cover",
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default WelcomeSection;
