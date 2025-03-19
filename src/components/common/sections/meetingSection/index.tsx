import { Box, Typography, Grid, Card, CardContent, Container } from "@mui/material";
import Image from "next/image";
import finkedaImage from '../../../../../public/finkeda-new.png';


const MeetingIllustration = () => {
  return (
    <Box sx={{ color: "#f9f9f9", }}>
        <Container maxWidth="lg" sx={{ color: "#f9f9f9", }}>
        <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            component="h1"
            fontWeight="bold"
            sx={{ color: "#3f51b5" }}
          >
            Rizing Pay
          </Typography>
          <Typography variant="h5" fontWeight="bold" sx={{ mt: 1 }}>
            Your Ultimate Destination for One-stop Digital Banking Services
            And Fintech Solutions
          </Typography>
          <Typography variant="body1" sx={{ mt: 2, color: "#555" }}>
            We at <b>Rizing Pay</b> are renowned for easy, reliable, instant digital
            banking services and unparalleled fintech solutions while ensuring
            digital convenience in small towns and rural areas. Customers in
            remote areas can now effortlessly take advantage of a comprehensive
            range of digital banking and financial services just by visiting
            nearby <b>Rizing Pay</b> merchants. Our goal is to make every digital
            banking service easily accessible, secure, and even more convenient
            everywhere.
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ boxShadow: "none", backgroundColor: "transparent" }}>
            <CardContent>
              <img
                src={finkedaImage.src}
                alt="Fintech illustration"
                // layout="responsive"
                // width={600}
                // height={400}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
        </Container>
      
    </Box>
  );
};

export default MeetingIllustration;
