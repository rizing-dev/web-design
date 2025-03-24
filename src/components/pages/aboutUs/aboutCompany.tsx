import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Container,
} from "@mui/material";
import Image from "next/image";
import businessImage from "../../../../public/images/aboutus123.jpg";

const CompanyInfo = () => {
  return (
    <Container maxWidth={"lg"}>
      <Box sx={{ py: 6, px: 4, backgroundColor: "#f5f5f5" }}>
        <Grid container spacing={4} alignItems="center">
          {/* Left Side: Text Content */}
          <Grid item xs={12} md={7}>
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", color: "#1a237e" }}
            >
              We're on a Mission to Change Your View of B2B
            </Typography>
            <Typography variant="body1" sx={{ mt: 2, color: "#424242" }}>
              Rizing Pay has been transforming the B2B space for the last{" "}
              <strong>3 years</strong>, partnering with neighborhood retail
              stores and enabling them with tools to provide assisted financial
              and digital commerce services to their local communities.
            </Typography>
            <Typography variant="body1" sx={{ mt: 2, color: "#424242" }}>
              We operate on a <strong>Rizing Pay Portal</strong>, where we
              empower local businesses with digital solutions, skill development
              programs, and financial inclusion services.
            </Typography>
            <Card
              sx={{ mt: 3, p: 2, backgroundColor: "#ffffff", boxShadow: 3 }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "#1a237e" }}
                >
                  Why Rizing Pay?
                </Typography>
                <Typography variant="body2" sx={{ mt: 1, color: "#616161" }}>
                  - <strong>15+ Lakh </strong> Active Reatiler Partners <br />-
                  <strong>50 cr + </strong> Customers Served <br />-
                  <strong>20,000 +</strong> PIN Codes Covered
                  <br />-<strong>20 Lakh +</strong> Transactions Per Day
                  <br />-
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Right Side: Image */}
          <Grid item xs={12} md={5}>
            <Image
              src={businessImage}
              alt="Rizing Pay Business"
              width={400}
              height={100}
              style={{
                borderRadius: "12px",
                boxShadow: "3px 3px 10px rgba(0, 0, 0, 0.1)",
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default CompanyInfo;
