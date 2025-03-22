import { Box, Grid, Typography, Paper, useTheme } from "@mui/material";
import { JSX } from "react";

interface Benefit {
  icon: JSX.Element;
  text: string;
}

interface Props {
  title: string;
  benefits: Benefit[];
}

const BenefitsSection = ({ title = "Test", benefits = [] }: Props) => {
  const theme = useTheme(); // Get theme object

  return (
    <Box sx={{ maxWidth: "900px", mx: "auto", p: 4, textAlign: "center" }}>
      <Typography fontWeight="bold" gutterBottom>
        {title}{" "}
        <Typography fontWeight="bold" color="primary" component="span">
          Rizing Pay
        </Typography>
      </Typography>

      <Grid container spacing={3}>
        {benefits.map((benefit, index) => (
          <Grid key={index} item xs={12} sm={6}>
            <Paper
              elevation={4}
              sx={{
                display: "flex",
                alignItems: "center",
                p: 2,
                borderRadius: 3,
                transition: "0.3s",
                bgcolor: theme.palette.background.paper,
                "&:hover": { transform: "scale(1.05)", boxShadow: 8 },
              }}
            >
              <Box
                sx={{
                  width: 60,
                  height: 60,
                  bgcolor: theme.palette.primary.light,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 2,
                  mr: 2,
                  boxShadow: 3,
                  color: theme.palette.primary.contrastText,
                }}
              >
                {benefit.icon}
              </Box>
              <Typography
                variant="body1"
                fontWeight="500"
                color={theme.palette.text.primary}
              >
                {benefit.text}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BenefitsSection;
