import CommonServices from "@/components/common/services";
import servicesContent from "@/config/static/servicesContent";
import React from "react";

const PaymentGateway = () => {
  return <div>
    <CommonServices
        images={servicesContent.pg.images}
        services={servicesContent.pg.services}
        benefitsData={servicesContent.pg.benefitsData}
        benefitsTitle={servicesContent.pg.benefitsTitle}
      />
  </div>;
};

export default PaymentGateway;
