import CommonServices from "@/components/common/services";
import servicesContent from "@/config/static/servicesContent";
import React from "react";

const ServicesDmt = () => {
  return (
    <div>
      <CommonServices
        images={servicesContent.dmt.images}
        services={servicesContent.dmt.services}
        benefitsData={servicesContent.dmt.benefitsData}
        benefitsTitle={servicesContent.dmt.benefitsTitle}
      />
    </div>
  );
};

export default ServicesDmt;
