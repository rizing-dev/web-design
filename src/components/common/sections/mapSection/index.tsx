import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Divider,
  Grid,
  Container,
} from "@mui/material";
import { styled } from "@mui/material/styles";

// Styled components
const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: theme.spacing(3),
  boxShadow: theme.shadows[10],
  padding: theme.spacing(5, 3),
  position: "relative",
  overflow: "visible",
  backgroundColor: "#f5f5f5",
}));

const StyledMetricBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center", // horizontally center children
  justifyContent: "center", // vertically center children (if parent allows)
  textAlign: "center", // center text inside Typography
  position: "relative",
  padding: theme.spacing(3, 4),
  backgroundColor: "#ffffff",
  borderRadius: theme.spacing(2),
  boxShadow: theme.shadows[2],
  transition: "all 0.3s ease",
  height: "100%", // ensures full height usage in Grid item
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: theme.shadows[5],
  },
}));


const StyledDivider = styled(Divider)(({ theme }) => ({
  position: "absolute",
  height: "70%",
  top: "15%",
  width: 1,
  backgroundColor: "#e0e0e0",
}));

const MapSectionCard = () => {
  return (
    <Box>
      <Container maxWidth="lg">
        <StyledCard>
          <CardContent>
            {/* Light background map In Future Need*/}

            {/* Heading */}
            <Box
              sx={{
                textAlign: "center",
                mb: 4,
                position: "relative",
                zIndex: 1,
              }}
            >
              <Typography
                variant="h3"
                component="h1"
                gutterBottom
                sx={{
                  fontWeight: "bold",
                  color: "#0f4c9f",
                  fontSize: { xs: "1.75rem", sm: "2rem", md: "2.5rem" },
                  letterSpacing: "0.05em",
                }}
              >
                Empowering Financial Inclusion for All
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
                <Box
                  component="span"
                  sx={{ width: 60, height: 4, backgroundColor: "gold" }}
                />
              </Box>
              <Typography
                variant="subtitle1"
                sx={{
                  maxWidth: "700px",
                  margin: "0 auto",
                  fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                  color: "#666",
                }}
              >
                Our mission is to build the largest agent banking network,
                creating access to financial services for everyone, everywhere.
              </Typography>
            </Box>

            {/* Metrics */}
            <Grid
              container
              spacing={2}
              sx={{ position: "relative", zIndex: 1, mt: 4 }}
            >
              <Grid item xs={12} sm={6} md={3}>
                <StyledMetricBox>
                  <Typography
                    variant="h3"
                    component="div"
                    sx={{
                      fontWeight: "bold",
                      display: "flex",
                      alignItems: "flex-end",
                      fontSize: "2rem",
                    }}
                  >
                    15
                    <Typography
                      variant="h5"
                      component="span"
                      sx={{ ml: 1, mb: 0.5 }}
                    >
                      Lakhs
                    </Typography>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Active Retail Partners
                  </Typography>
                </StyledMetricBox>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <StyledMetricBox>
                  <Typography
                    variant="h3"
                    component="div"
                    sx={{
                      fontWeight: "bold",
                      display: "flex",
                      alignItems: "flex-end",
                      fontSize: "2rem",
                    }}
                  >
                    50
                    <Typography
                      variant="h5"
                      component="span"
                      sx={{ ml: 1, mb: 0.5 }}
                    >
                      Crs
                    </Typography>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Customers Served
                  </Typography>
                </StyledMetricBox>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <StyledMetricBox>
                  <Typography
                    variant="h3"
                    component="div"
                    sx={{ fontWeight: "bold", fontSize: "2rem" }}
                  >
                    20,000
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    PIN Codes Covered
                  </Typography>
                </StyledMetricBox>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <StyledMetricBox>
                  <Typography
                    variant="h3"
                    component="div"
                    sx={{
                      fontWeight: "bold",
                      display: "flex",
                      alignItems: "flex-end",
                      fontSize: "2rem",
                    }}
                  >
                    20
                    <Typography
                      variant="h5"
                      component="span"
                      sx={{ ml: 1, mb: 0.5 }}
                    >
                      Lakhs
                    </Typography>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Transactions Per Day
                  </Typography>
                </StyledMetricBox>
              </Grid>
            </Grid>

          </CardContent>
        </StyledCard>
      </Container>
    </Box>
  );
};

export default MapSectionCard;
