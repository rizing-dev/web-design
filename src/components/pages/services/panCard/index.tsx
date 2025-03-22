import CommonServices from "@/components/common/services";
import servicesContent from "@/config/static/servicesContent";
import React from "react";

const ServicesPanCard = () => {
  return (
    <div>
      <CommonServices
        images={servicesContent.panCard.images}
        services={servicesContent.panCard.services}
        benefitsData={servicesContent.panCard.benefitsData}
        benefitsTitle={servicesContent.panCard.benefitsTitle}
      />
    </div>
  );
};

export default ServicesPanCard;
