import CommonServices from "@/components/common/services";
import servicesContent from "@/config/static/servicesContent";
import React from "react";

const ServicesInsurance = () => {
  return (
    <div>
      <CommonServices
        images={servicesContent.insurance.images}
        services={servicesContent.insurance.services}
        benefitsData={servicesContent.insurance.benefitsData}
        benefitsTitle={servicesContent.insurance.benefitsTitle}
      />
    </div>
  );
};

export default ServicesInsurance;
