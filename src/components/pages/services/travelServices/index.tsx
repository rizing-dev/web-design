import CommonServices from "@/components/common/services";
import servicesContent from "@/config/static/servicesContent";
import React from "react";

const ServicesTravel = () => {
  return (
    <CommonServices
      images={servicesContent.travel.images}
      services={servicesContent.travel.services}
      benefitsData={servicesContent.travel.benefitsData}
      benefitsTitle={servicesContent.travel.benefitsTitle}
    />
  );
};

export default ServicesTravel;
