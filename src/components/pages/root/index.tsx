import React from "react";
import HeroSection from "@/components/common/sections/heroSection";
import MapSectionCard from "@/components/common/sections/mapSection";
import FintechMeetingIllustration from "@/components/common/sections/meetingSection";
import { Box } from "@mui/material";
import ServiceSectionMicroATM from "@/components/common/sections/servicesection/microAtm";
import ServiceSectionUtilityBillPayment from "@/components/common/sections/servicesection/utilityBillPayment";
import ServiceSectionAadhaarBanking from "@/components/common/sections/servicesection/aadhaarBanking";
import ServiceSectionPanCard from "@/components/common/sections/servicesection/panCardApplication";
import FeaturesSection from "@/components/common/sections/featuresSection";
const RootPage = () => {
  return (
    <Box sx={{ py: 3, backgroundColor: "#f5f5f5" }}>
      <Box>
        <HeroSection />
      </Box>
      <Box mt={2} mb={2}>
        <MapSectionCard />
      </Box>
      <Box mb={2} mt={2}>
        <FintechMeetingIllustration />
      </Box>
      <Box>
        <FeaturesSection />
      </Box>
      {/* For Services Section */}
      <Box mt={2}>
        <ServiceSectionAadhaarBanking />
        <ServiceSectionUtilityBillPayment />
        <ServiceSectionMicroATM />
        <ServiceSectionPanCard />
      </Box>
    </Box>
  );
};

export default RootPage;
