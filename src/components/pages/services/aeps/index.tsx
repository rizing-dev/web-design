import React from "react";
import CommonServices from "@/components/common/services";
import servicesContent from "@/config/static/servicesContent";

const AepsServices = () => {
  return (
    <div>
      <CommonServices
        images={servicesContent.aeps.images}
        services={servicesContent.aeps.services}
        benefitsData={servicesContent.aeps.benefitsData}
        benefitsTitle={servicesContent.aeps.benefitsTitle}
      />
      ;
    </div>
  );
};

export default AepsServices;
