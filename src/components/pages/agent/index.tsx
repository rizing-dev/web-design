"use client";
import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
  Grid,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  useTheme,
  useMediaQuery,
  Chip,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import StorefrontIcon from "@mui/icons-material/Storefront";
import BusinessIcon from "@mui/icons-material/Business";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import SecurityIcon from "@mui/icons-material/Security";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import LaptopIcon from "@mui/icons-material/Laptop";
import PersonIcon from "@mui/icons-material/Person";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AppsIcon from "@mui/icons-material/Apps";
import partnerImg from "../../../../public/images/partnership-benefits.png";

const BecomeAnAgent = () => {
  const [activeStep, setActiveStep] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const steps = [
    "Choose Agent Type",
    "Submit Application",
    "Verification",
    "Onboarding",
  ];

  const retailerBenefits = [
    "Earn extra income as commission on every service",
    "Easy, Fast & Secure",
    "Manage all services in one click",
    "The best user interface for all important actions",
    "Track business growth with detailed reports",
    "Single wallet for all the services",
    "Works 24/7",
    "Customer care team to assist in all queries",
  ];

  const distributorBenefits = [
    "Unlimited Retailer creation",
    "One time investment for a life time earning",
    "Earn Commission For join Every Member",
    "24/7 Support",
    "All services training",
    "Become a Distributor and earn up to Rs. 100000/- per month",
  ];

  const masterDistributorBenefits = [
    "Unlimited Distributorship Creation",
    "Earn Commission For join Every Member",
    "24/7 Support",
    "All services training",
    "It is a programme with unlimited income opportunity",
  ];

  const handleNextStep = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  return (
    <Box sx={{ bgcolor: "#f8f9fa" }}>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box textAlign="center" mb={6}>
          <Typography
            variant="overline"
            color="primary"
            fontWeight="bold"
            sx={{ letterSpacing: 2 }}
          >
            JOIN OUR NETWORK
          </Typography>
          <Typography variant="h3" component="h1" fontWeight="bold" mb={2}>
            Become an Agent
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            sx={{ maxWidth: "700px", mx: "auto" }}
          >
            Join our growing network of financial service providers and earn
            competitive commissions while helping customers with their financial
            needs.
          </Typography>
        </Box>

        <Typography variant="h5" fontWeight="medium" mb={3} textAlign="center">
          Select the agent type that best fits your business needs
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {/* Retailer Card */}
          <Grid item xs={12} md={6} lg={4}>
            <Card
              elevation={3}
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.3s, box-shadow 0.3s",
                borderRadius: 2,
                overflow: "hidden",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: theme.shadows[10],
                },
              }}
            >
              <Box
                sx={{
                  bgcolor: "primary.main",
                  py: 3,
                  px: 2,
                  textAlign: "center",
                  position: "relative",
                }}
              >
                <StorefrontIcon sx={{ fontSize: 50, color: "white" }} />
                <Typography
                  variant="h4"
                  component="h2"
                  color="white"
                  fontWeight="bold"
                >
                  Retailer
                </Typography>
                <Typography variant="subtitle1" color="white" mt={1}>
                  All services under one roof
                </Typography>
              </Box>

              <CardContent sx={{ flexGrow: 1, p: 4 }}>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" fontWeight="bold" mb={1}>
                    Investment
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "baseline" }}>
                    <Typography
                      variant="h4"
                      component="span"
                      color="primary.main"
                      fontWeight="bold"
                    >
                      ₹1,999
                    </Typography>
                    <Typography variant="body1" component="span" ml={1}>
                      one-time fee
                    </Typography>
                  </Box>
                </Box>

                <Divider sx={{ my: 3 }} />

                <Typography variant="h6" fontWeight="bold" mb={2}>
                  Benefits
                </Typography>

                <List disablePadding>
                  {retailerBenefits.map((benefit, index) => (
                    <ListItem key={index} disablePadding sx={{ mb: 1 }}>
                      <ListItemIcon sx={{ minWidth: "36px" }}>
                        <CheckCircleIcon color="success" />
                      </ListItemIcon>
                      <ListItemText primary={benefit} />
                    </ListItem>
                  ))}
                </List>

                <Box mt={3} mb={1}>
                  <Chip
                    icon={<SecurityIcon />}
                    label="SINGLE WALLET"
                    color="primary"
                    variant="outlined"
                    sx={{ fontWeight: "bold" }}
                  />
                </Box>
                <Typography variant="body2" color="text.secondary">
                  Utilize or sell any service from one single wallet whether it
                  is AEPS, Recharge, Domestic Money Transfer, Insurance
                  Services, Registration & Taxation or any other service.
                </Typography>
              </CardContent>

              <CardActions sx={{ p: 3, pt: 0 }}>
                <Button
                  variant="contained"
                  size="large"
                  fullWidth
                  endIcon={<ArrowForwardIcon />}
                  onClick={handleNextStep}
                  sx={{ borderRadius: "8px" }}
                >
                  Apply as Retailer
                </Button>
              </CardActions>
            </Card>
          </Grid>

          {/* Distributor Card */}
          <Grid item xs={12} md={6} lg={4}>
            <Card
              elevation={3}
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.3s, box-shadow 0.3s",
                borderRadius: 2,
                overflow: "hidden",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: theme.shadows[10],
                },
              }}
            >
              <Box
                sx={{
                  bgcolor: "secondary.main",
                  py: 3,
                  px: 2,
                  textAlign: "center",
                }}
              >
                <BusinessIcon sx={{ fontSize: 50, color: "white" }} />
                <Typography
                  variant="h4"
                  component="h2"
                  color="white"
                  fontWeight="bold"
                >
                  Distributor
                </Typography>
                <Typography variant="subtitle1" color="white" mt={1}>
                  Appoint your own retailers
                </Typography>
              </Box>

              <CardContent sx={{ flexGrow: 1, p: 4 }}>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" fontWeight="bold" mb={1}>
                    Investment
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "baseline" }}>
                    <Typography
                      variant="h4"
                      component="span"
                      color="secondary.main"
                      fontWeight="bold"
                    >
                      ₹19,999
                    </Typography>
                    <Typography variant="body1" component="span" ml={1}>
                      one-time fee
                    </Typography>
                  </Box>
                </Box>

                <Divider sx={{ my: 3 }} />

                <Typography variant="h6" fontWeight="bold" mb={2}>
                  Benefits
                </Typography>

                <List disablePadding>
                  {distributorBenefits.map((benefit, index) => (
                    <ListItem key={index} disablePadding sx={{ mb: 1 }}>
                      <ListItemIcon sx={{ minWidth: "36px" }}>
                        <CheckCircleIcon color="success" />
                      </ListItemIcon>
                      <ListItemText primary={benefit} />
                    </ListItem>
                  ))}
                </List>

                <Box mt={3} mb={1}>
                  <Chip
                    icon={<AccountTreeIcon />}
                    label="BUILD YOUR NETWORK"
                    color="secondary"
                    variant="outlined"
                    sx={{ fontWeight: "bold" }}
                  />
                </Box>
                <Typography variant="body2" color="text.secondary">
                  We at Rizingpay provide all the solutions to enhance its
                  marketing and support system while we manage all the backend
                  technical and operational work.
                </Typography>
              </CardContent>

              <CardActions sx={{ p: 3, pt: 0 }}>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  fullWidth
                  endIcon={<ArrowForwardIcon />}
                  onClick={handleNextStep}
                  sx={{ borderRadius: "8px" }}
                >
                  Apply as Distributor
                </Button>
              </CardActions>
            </Card>
          </Grid>

          {/* Master Distributor Card */}
          <Grid item xs={12} md={6} lg={4}>
            <Card
              elevation={3}
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.3s, box-shadow 0.3s",
                borderRadius: 2,
                overflow: "hidden",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: theme.shadows[10],
                },
              }}
            >
              <Box
                sx={{ bgcolor: "#6a1b9a", py: 3, px: 2, textAlign: "center" }}
              >
                <AccountBalanceIcon sx={{ fontSize: 50, color: "white" }} />
                <Typography
                  variant="h4"
                  component="h2"
                  color="white"
                  fontWeight="bold"
                >
                  Master Distributor
                </Typography>
                <Typography variant="subtitle1" color="white" mt={1}>
                  Powerful unlimited earning opportunity
                </Typography>
              </Box>

              <CardContent sx={{ flexGrow: 1, p: 4 }}>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" fontWeight="bold" mb={1}>
                    Investment
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "baseline" }}>
                    <Typography
                      variant="h4"
                      component="span"
                      sx={{ color: "#6a1b9a" }}
                      fontWeight="bold"
                    >
                      ₹29,999
                    </Typography>
                    <Typography variant="body1" component="span" ml={1}>
                      one-time fee
                    </Typography>
                  </Box>
                </Box>

                <Divider sx={{ my: 3 }} />

                <Typography variant="h6" fontWeight="bold" mb={2}>
                  Benefits
                </Typography>

                <List disablePadding>
                  {masterDistributorBenefits.map((benefit, index) => (
                    <ListItem key={index} disablePadding sx={{ mb: 1 }}>
                      <ListItemIcon sx={{ minWidth: "36px" }}>
                        <CheckCircleIcon color="success" />
                      </ListItemIcon>
                      <ListItemText primary={benefit} />
                    </ListItem>
                  ))}
                </List>

                <Box mt={3} mb={1}>
                  <Chip
                    icon={<MonetizationOnIcon />}
                    label="UNLIMITED INCOME"
                    sx={{
                      bgcolor: "#6a1b9a",
                      color: "white",
                      fontWeight: "bold",
                    }}
                  />
                </Box>
                <Typography variant="body2" color="text.secondary">
                  Appoint Master Distributors, Distributors and Retailers while
                  we manage all the backend technical and operational works for
                  you.
                </Typography>
              </CardContent>

              <CardActions sx={{ p: 3, pt: 0 }}>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#6a1b9a",
                    "&:hover": { bgcolor: "#4a148c" },
                    borderRadius: "8px",
                  }}
                  size="large"
                  fullWidth
                  endIcon={<ArrowForwardIcon />}
                  onClick={handleNextStep}
                >
                  Apply as Master Distributor
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>

        {/* Partnership Benefits Section */}
        <Box sx={{ mt: 10, mb: 4 }}>
          <Typography
            variant="h4"
            component="h2"
            fontWeight="bold"
            color="primary"
            textAlign="center"
            mb={1}
          >
            Partnership Benefits
          </Typography>
          <Box
            sx={{
              width: "60px",
              height: "4px",
              backgroundColor: "#FFD700",
              mx: "auto",
              mb: 8,
            }}
          />

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Grid container spacing={4}>
                {/* Digital Distribution */}
                <Grid item xs={12}>
                  <Paper
                    elevation={2}
                    sx={{
                      p: 3,
                      borderRadius: 2,
                      transition: "0.3s",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: 4,
                      },
                    }}
                  >
                    <Box
                      sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}
                    >
                      <Box
                        sx={{
                          bgcolor: "primary.main",
                          borderRadius: 1,
                          p: 1,
                          display: "flex",
                          mr: 2,
                        }}
                      >
                        <LaptopIcon sx={{ color: "white", fontSize: 28 }} />
                      </Box>
                      <Box>
                        <Typography
                          variant="h6"
                          fontWeight="bold"
                          color="text.primary"
                          gutterBottom
                        >
                          Set-up your digital distribution business
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Operate from anywhere – your home or shop. No
                          inventory, no warehouse, no manpower required.
                        </Typography>
                      </Box>
                    </Box>
                  </Paper>
                </Grid>

                {/* Multi-service */}
                <Grid item xs={12}>
                  <Paper
                    elevation={2}
                    sx={{
                      p: 3,
                      borderRadius: 2,
                      transition: "0.3s",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: 4,
                      },
                    }}
                  >
                    <Box
                      sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}
                    >
                      <Box
                        sx={{
                          bgcolor: "primary.main",
                          borderRadius: 1,
                          p: 1,
                          display: "flex",
                          mr: 2,
                        }}
                      >
                        <AppsIcon sx={{ color: "white", fontSize: 28 }} />
                      </Box>
                      <Box>
                        <Typography
                          variant="h6"
                          fontWeight="bold"
                          color="text.primary"
                          gutterBottom
                        >
                          Multi-service distribution from one platform
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Offer Banking, Payments, Travel, Insurance, Bill
                          Payments & Recharge services from one platform. You
                          can offer any or all service.
                        </Typography>
                      </Box>
                    </Box>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>

            {/* Center Image */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                src={partnerImg.src}
                alt="Partnership Handshake"
                sx={{
                  maxWidth: "100%",
                  height: "auto",
                  borderRadius: 3,
                  boxShadow: 6,
                }}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Grid container spacing={4}>
                {/* One time onboarding */}
                <Grid item xs={12}>
                  <Paper
                    elevation={2}
                    sx={{
                      p: 3,
                      borderRadius: 2,
                      transition: "0.3s",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: 4,
                      },
                    }}
                  >
                    <Box
                      sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}
                    >
                      <Box
                        sx={{
                          bgcolor: "primary.main",
                          borderRadius: 1,
                          p: 1,
                          display: "flex",
                          mr: 2,
                        }}
                      >
                        <PersonIcon sx={{ color: "white", fontSize: 28 }} />
                      </Box>
                      <Box>
                        <Typography
                          variant="h6"
                          fontWeight="bold"
                          color="text.primary"
                          gutterBottom
                        >
                          One time onboarding
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Simple and easy on-boarding process for your network.
                          Retailers once on-boarded can use any of our existing
                          services or new products offered and keep adding to
                          their income.
                        </Typography>
                      </Box>
                    </Box>
                  </Paper>
                </Grid>

                {/* Lifetime Income */}
                <Grid item xs={12}>
                  <Paper
                    elevation={2}
                    sx={{
                      p: 3,
                      borderRadius: 2,
                      transition: "0.3s",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: 4,
                      },
                    }}
                  >
                    <Box
                      sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}
                    >
                      <Box
                        sx={{
                          bgcolor: "primary.main",
                          borderRadius: 1,
                          p: 1,
                          display: "flex",
                          mr: 2,
                        }}
                      >
                        <AccessTimeIcon sx={{ color: "white", fontSize: 28 }} />
                      </Box>
                      <Box>
                        <Typography
                          variant="h6"
                          fontWeight="bold"
                          color="text.primary"
                          gutterBottom
                        >
                          Lifetime Income
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Earn best in industry commission on every transaction
                          your retailer makes.
                        </Typography>
                      </Box>
                    </Box>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>

            {/* Earnings Section */}
            <Grid item xs={12} mt={4}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  borderRadius: 2,
                  textAlign: "center",
                  background:
                    "linear-gradient(135deg, #f5f7fa 0%, #e4e8ef 100%)",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 2,
                  }}
                >
                  <Box
                    sx={{
                      bgcolor: "primary.main",
                      color: "white",
                      width: 60,
                      height: 60,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mr: 2,
                    }}
                  >
                    <Typography variant="h6" fontWeight="bold">
                      ₹
                    </Typography>
                  </Box>
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    color="primary.main"
                  >
                    Earn Extra ₹40,000 to ₹60,000 per month
                  </Typography>
                </Box>
                <Typography variant="body1" mb={2}>
                  With just 5-7 retailers in your network you can easily add an
                  extra ₹40000 to ₹ 60000 income per month. Onboard more
                  retailers to earn more.
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    borderRadius: "30px",
                    px: 4,
                    py: 1.2,
                    fontWeight: "bold",
                  }}
                >
                  Start Earning Today
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Box>

        {/* Final CTA Section */}
        <Paper
          elevation={0}
          sx={{
            bgcolor: "primary.main",
            p: 6,
            mt: 6,
            borderRadius: 3,
            textAlign: "center",
            color: "white",
          }}
        >
          <Typography variant="h4" fontWeight="bold" mb={2}>
            Ready to Join Our Network?
          </Typography>
          <Typography
            variant="body1"
            mb={4}
            sx={{ maxWidth: "700px", mx: "auto" }}
          >
            Take the first step towards financial freedom and business growth.
            Our team is ready to help you succeed.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            sx={{
              borderRadius: "30px",
              px: 6,
              py: 1.5,
              fontWeight: "bold",
              fontSize: "1.1rem",
            }}
          >
            Apply Now
          </Button>
        </Paper>
      </Container>
    </Box>
  );
};

export default BecomeAnAgent;
