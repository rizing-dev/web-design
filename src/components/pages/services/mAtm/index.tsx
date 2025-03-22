import CommonServices from "@/components/common/services";
import servicesContent from "@/config/static/servicesContent";
import React from "react";

const ServicesMatm = () => {
  return (
    <div>
      <CommonServices
        images={servicesContent.mAtm.images}
        services={servicesContent.mAtm.services}
        benefitsData={servicesContent.mAtm.benefitsData}
        benefitsTitle={servicesContent.mAtm.benefitsTitle}
      />
    </div>
  );
};

export default ServicesMatm;
