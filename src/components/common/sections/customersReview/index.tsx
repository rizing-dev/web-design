import React from "react";
import {
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Avatar,
  Box,
  useTheme,
  useMediaQuery,
  Paper,
  Divider,
} from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import customer1 from "../../../../../public/customers image/WhatsApp Image 2025-04-22 at 9.16.48 PM.jpeg";
import customer2 from "../../../../../public/customers image/IMG_20250422_211929.jpg";
import customer3 from "../../../../../public/customers image/IMG_20250422_211244.jpg";
interface RetailerTestimonialProps {
  name: string;
  location: string;
  testimonial: string;
  avatarSrc: string;
}

const RetailerTestimonial = ({
  name,
  location,
  testimonial,
  avatarSrc,
}: RetailerTestimonialProps) => {
  return (
    <Paper
      elevation={3}
      sx={{
        height: "100%",
        borderRadius: 4,
        overflow: "hidden",
        position: "relative",
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
          transform: "translateY(-10px)",
          boxShadow: "0 16px 30px rgba(0,0,0,0.1)",
        },
      }}
    >
      <Box
        sx={{
          height: 12,
          width: "100%",
          bgcolor: "primary.main",
        }}
      />
      <Card
        elevation={0}
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          pt: 2,
          pb: 4,
          px: 3,
        }}
      >
        <Box
          sx={{
            position: "relative",
            mb: 3,
            mt: 1,
          }}
        >
          <Avatar
            src={avatarSrc}
            alt={name}
            sx={{
              width: 120,
              height: 120,
              border: "4px solid white",
              boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: -5,
              left: "50%",
              transform: "translateX(-50%)",
              bgcolor: "primary.main",
              color: "white",
              px: 2,
              py: 0.5,
              borderRadius: 5,
              fontSize: "0.8rem",
              display: "flex",
              alignItems: "center",
              gap: 0.5,
            }}
          >
            <LocationOnIcon fontSize="small" />
            {location}
          </Box>
        </Box>

        <Typography
          variant="h5"
          component="h2"
          color="primary.dark"
          fontWeight="bold"
          gutterBottom
        >
          {name}
        </Typography>

        <Box sx={{ position: "relative", width: "100%", mb: 2 }}>
          <Divider />
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "background.paper",
              px: 2,
            }}
          >
            <FormatQuoteIcon color="primary" />
          </Box>
        </Box>

        <CardContent sx={{ pt: 0 }}>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              fontStyle: "italic",
              lineHeight: 1.6,
            }}
          >
            {testimonial}
          </Typography>
        </CardContent>
      </Card>
    </Paper>
  );
};

const RetailerTestimonials = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const testimonials = [
    {
      name: "Umesh",
      location: "UP",
      testimonial:
        "मैं  2- 3  पोर्टल प्रयोग  करता था पर मुझे Rizing pay  की AEPS सर्विस सबसे आरामदायक लगी और कमीशन भी अच्छा है एक रिटेलर को और क्या चाहिए ",
      avatarSrc:
      customer1.src,
    },
    {
      name: "Harpreet Singh",
      location: "Punjab",
      testimonial:
        "Rizing Pay AEPS is very easy to use. If there is some issue some day, customer care is very quick to resolve it. ​",
      avatarSrc: customer2.src,
    },
    {
      name: "Chanchal",
      location: "Mathura",
      testimonial:
        "AEPS is a helpful service by Rizing Pay for customers. They just need to use their finger scan to withdraw cash from their bank account. ​",
      avatarSrc: customer3.src,
    },
  ];

  return (
    <Box
      sx={{
        background: "linear-gradient(180deg, #f8f8ff 0%, #ffffff 100%)",
        py: 10,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: 8, textAlign: "center" }}>
          <Typography
            variant="h3"
            component="h1"
            fontWeight="bold"
            sx={{
              mb: 1,
              background: "linear-gradient(45deg, #6a1b9a 30%, #9c27b0 90%)",
              backgroundClip: "text",
              textFillColor: "transparent",
              display: "inline-block",
            }}
          >
            What Our Retailers{" "}
          </Typography>
          <Typography
            variant="h3"
            component="span"
            fontWeight="bold"
            color="text.primary"
          >
            {'  '}Say
          </Typography>
          <Box
            sx={{
              width: 100,
              height: 4,
              bgcolor: "primary.main",
              mx: "auto",
              mt: 2,
              borderRadius: 2,
            }}
          />
        </Box>

        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid
              item
              xs={12}
              md={4}
              key={index}
              sx={{
                animation: `fadeIn 0.5s ease-out ${index * 0.2}s both`,
                "@keyframes fadeIn": {
                  from: { opacity: 0, transform: "translateY(20px)" },
                  to: { opacity: 1, transform: "translateY(0)" },
                },
              }}
            >
              <RetailerTestimonial {...testimonial} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default RetailerTestimonials;
