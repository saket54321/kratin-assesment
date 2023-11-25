import React from "react";
import Cardsdata from "../Data/LocalSupportsData";
import Card from "../Cards/LocalCard";
import "./LocalSupport.css"

const LocalSupports = () => {
  return (
    <div
      className="lscardContainer"
    >
      <Card data={Cardsdata} />
    </div>
  );
};

export default LocalSupports;
