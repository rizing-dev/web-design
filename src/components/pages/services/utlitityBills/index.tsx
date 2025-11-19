import CommonServices from "@/components/common/services";
import servicesContent from "@/config/static/servicesContent";
import React from "react";

const UtilityBills = () => {
  return (
    <div>
      <CommonServices
        images={servicesContent.utilityBills.images}
        services={servicesContent.utilityBills.services}
        benefitsData={servicesContent.utilityBills.benefitsData}
        benefitsTitle={servicesContent.utilityBills.benefitsTitle}
      />
    </div>
  );
};

export default UtilityBills;
