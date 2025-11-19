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

const CommonServiceSection = ({
  title,
  description,
  imageSrc,
  imageAlt,
  buttonText,
  onButtonClick,
  imagePosition = "left", // Default is "left"
}: any) => {
  const isImageLeft = imagePosition === "left";

  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth={"lg"}>
        <Card sx={{ backgroundColor: "#f5f5f5" }}>
          <Grid container spacing={3} alignItems="center">
            {/* Conditionally render Left or Right side */}
            {isImageLeft ? (
              <>
                {/* Left Side - Image */}
                <Grid
                  item
                  xs={12}
                  md={6}
                  display="flex"
                  justifyContent="center"
                >
                  <img
                    src={imageSrc}
                    alt={imageAlt}
                    width={600}
                    height={300}
                    style={{ borderRadius: "8px", objectFit: "cover" }}
                  />
                </Grid>

                {/* Right Side - Text */}
                <Grid item xs={12} md={6}>
                  <CardContent>
                    <Typography
                      variant="h5"
                      color="primary"
                      fontWeight="bold"
                      sx={{ textTransform: "uppercase" }}
                    >
                      {title}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      mt={2}
                      sx={{
                        lineHeight: 1.6,
                        fontSize: "1rem",
                      }}
                    >
                      {description}
                    </Typography>
                    <Button
                      variant="contained"
                      sx={{
                        mt: 3,
                        backgroundColor: "#00796b",
                        "&:hover": {
                          backgroundColor: "#004d40",
                        },
                      }}
                      onClick={onButtonClick}
                    >
                      {buttonText}
                    </Button>
                  </CardContent>
                </Grid>
              </>
            ) : (
              <>
                {/* Right Side - Image */}
                <Grid
                  item
                  xs={12}
                  md={6}
                  display="flex"
                  justifyContent="center"
                >
                  <img
                    src={imageSrc}
                    alt={imageAlt}
                    width={600}
                    height={300}
                    style={{ borderRadius: "8px", objectFit: "cover" }}
                  />
                </Grid>

                {/* Left Side - Text */}
                <Grid item xs={12} md={6}>
                  <CardContent>
                    <Typography
                      variant="h5"
                      color="primary"
                      fontWeight="bold"
                      sx={{ textTransform: "uppercase" }}
                    >
                      {title}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      mt={2}
                      sx={{
                        lineHeight: 1.6,
                        fontSize: "1rem",
                      }}
                    >
                      {description}
                    </Typography>
                    <Button
                      variant="contained"
                      sx={{
                        mt: 3,
                        backgroundColor: "#00796b",
                        "&:hover": {
                          backgroundColor: "#004d40",
                        },
                      }}
                      onClick={onButtonClick}
                    >
                      {buttonText}
                    </Button>
                  </CardContent>
                </Grid>
              </>
            )}
          </Grid>
        </Card>
      </Container>
    </Box>
  );
};

export default CommonServiceSection;
