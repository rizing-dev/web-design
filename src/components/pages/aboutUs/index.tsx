import React from "react";
import TopImage from "./topImage";
import MidSection from "./midSection";
import { Box } from "@mui/material";
import VisionMission from "./vissionMission";
import WelcomeSection from "./welcomeSection";
import CompanyInfo from "./aboutCompany";

const AboutUs = () => {
  return (
    <Box>
      <Box>
        <TopImage />
      </Box>
      <Box mt={2}>
        <MidSection />
      </Box>
      <Box>
        <CompanyInfo />
      </Box>
      <Box mt={2}>
        <VisionMission />
      </Box>
      <Box>
        <WelcomeSection />
      </Box>
    </Box>
  );
};

export default AboutUs;
