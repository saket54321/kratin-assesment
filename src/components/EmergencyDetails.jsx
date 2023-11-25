import React from "react";
import Cardsdata from "../Data/EmergencyDetailsData";
import Card from "../Cards/EmergencyDetailsCard";

const EmergencyDetails = () => {
  return (
    <div>
      <div>
        <Card data={Cardsdata} />
      </div>
    </div>
  );
};

export default EmergencyDetails;
