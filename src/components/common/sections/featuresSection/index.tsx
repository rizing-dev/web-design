import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Container,
} from "@mui/material";
import moneyBag from "../../../../../public/improved/money bag improved.svg";
import customerService from "../../../../../public/improved/Dedicated Customer Service Team.svg";
import productTraning from "../../../../../public/improved/Regular Product Training.svg";
import onBoardProduct from "../../../../../public/improved/Easy Onboarding Products.svg";
import card1 from "../../../../../public/improved/card1.png";
import card2 from "../../../../../public/improved/card2.png";
import card3 from "../../../../../public/improved/card3.png";
import card4 from "../../../../../public/improved/card4.png";

interface Props {
  image: string;
  title: string;
  description: string;
}

const FeatureCard = ({ image, title, description }: Props) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        textAlign: "center",
        boxShadow: 4,
        p: 2,
        borderRadius: "16px",
        transition: "transform 0.3s ease-in-out",
        "&:hover": { transform: "scale(1.05)" },
        height: "350px",
      }}
    >
      <Box display="flex" justifyContent="center" mt={2}>
        <img
          src={image}
          alt={title}
          style={{ width: "90px", height: "90px" }}
        />
      </Box>
      <CardContent>
        <Typography variant="h6" fontWeight="bold" color="primary">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" mt={1}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      image: card1.src,
      title: "All-in-One Digital Banking Hub",
      description:
        "We bring a complete suite of digital financial tools to local communities, delivered conveniently through trusted neighborhood merchants.",
    },
    {
      image: card2.src,
      title: "Security Is Our Top Priority",
      description:
        "At Rizing Pay, we prioritize your financial safety by offering secure, reliable, and user-friendly fintech solutions.",
    },
    {
      image: card3.src,
      title: "Support That Truly Cares",
      description:
        "Our support team goes the extra mile to ensure you get the help you need—promptly, professionally, and personally.",
    },
    {
      image: card4.src,
      title: "Smooth Digital Banking for Everyone",
      description:
        "We're bridging the gap in rural finance by offering modern, seamless payment solutions that are easy to use and accessible for all.",
    },
    // New Features rewritten below:
    {
      image: moneyBag.src,
      title: "Earn More With Us",
      description:
        "We reward our partners with attractive commission rates, recognizing the value of your hard work and commitment.",
    },
    {
      image: productTraning.src,
      title: "Ongoing Product Education",
      description:
        "Stay ahead with our consistent training programs designed to keep you informed about every new service and feature we launch.",
    },
    {
      image: onBoardProduct.src,
      title: "Simple & Fast Product Setup",
      description:
        "Our products are built for easy onboarding, enabling you to get started quickly with minimal hassle.",
    },
    {
      image: customerService.src,
      title: "Personalized Partner Support",
      description:
        "Our dedicated service team is always on hand to assist you, ensuring smooth operations and a better experience every step of the way.",
    },
  ];

  return (
    <Box sx={{ py: 5, backgroundColor: "#f9f9f9" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          textAlign="center"
          fontWeight="bold"
          color="primary"
          gutterBottom
        >
          Why Rizing Pay ?
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {features.map((feature, index) => (
            <Grid item key={index} xs={12} sm={6} md={3}>
              <FeatureCard {...feature} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeaturesSection;
