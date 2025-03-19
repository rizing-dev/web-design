import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Container,
} from "@mui/material";

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
      image:
        "https://finkeda.com/wp-content/uploads/2024/09/One-Stop-Digital-Banking-Services.png",
      title: "One-Stop Digital Banking Services",
      description:
        "We offer a wide range of digital banking solutions to our customers in small towns through our local merchants.",
    },
    {
      image:
        "https://finkeda.com/wp-content/uploads/2024/09/Safety-Comes-First.png",
      title: "Safety Comes First",
      description:
        "Our goal at FINKEDA is to provide our customers safe, easy and secure digital banking and Fintech solutions.",
    },
    {
      image:
        "https://finkeda.com/wp-content/uploads/2024/09/Exceptional-Customer-Support.png",
      title: "Exceptional Customer Support",
      description:
        "Nothing can beat the exceptional customer support of our team, for better experience while assuring that your needs are met.",
    },
    {
      image:
        "https://finkeda.com/wp-content/uploads/2024/09/Seamless-Digital-Banking-Solution-For-All.png",
      title: "Seamless Digital Banking Solution For All",
      description:
        "We revolutionize your payment and bring modern digital banking solutions to rural areas, making financial services accessible.",
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
          Why Choose Us?
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
