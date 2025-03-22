import { Box } from "@mui/material";
import TopImage from "./topImage";
import MidServiceSection from "./midSection";
import BenefitsSection from "./benefitsSection";

interface Props {
  images: any[];
  services: any[];
  benefitsData: any[];
  benefitsTitle: string;
}
const CommonServices = ({
  images,
  services,
  benefitsData,
  benefitsTitle,
}: Props) => {
  return (
    <Box sx={{ py: 0.5, backgroundColor: "#f5f5f5" }}>
      <Box>
        <TopImage images={images} />
      </Box>

      <Box>
        {services &&
          services?.map((service, index) => (
            <MidServiceSection key={index} {...service} />
          ))}
      </Box>

      <Box>
        <BenefitsSection title={benefitsTitle} benefits={benefitsData} />/
      </Box>
    </Box>
  );
};

export default CommonServices;
