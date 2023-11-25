import React from "react";
import "./Aside.css";
import MenuBar from "./MenuBar";
import Content from "./Content";
import AlwaysHappy from "./AlwaysHappy";
import ExercisesAndFitness from "./ExercisesAndFitness";
import HealthyEating from "./HealthyEating";
import LocalSupports from "./LocalSupports";
import EmergencyDetails from "./EmergencyDetails";
import ReminderDetails from "./ReminderDetails";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Aside = () => {
  const navigate = useNavigate();

  const handelClickToAH = () => {
    console.log("Working");
    navigate("/always Happy");
  };
  const handelClickToEF = () => {
    console.log("Working");
    navigate("/exercises and fitness");
  };
  const handelClickToHE = () => {
    console.log("Working");
    navigate("/healthy eating");
  };
  const handelClickToLS = () => {
    console.log("Working");
    navigate("/local support");
  };
  const handelClickToED = () => {
    console.log("Working");
    navigate("/emergency details");
  };
  const handelClickToREM = () => {
    console.log("Working");
    navigate("/remainder details");
  };
  return (
    <div className="asideContainer">
      <div className="menuBarContainer">
        <div className="menuBars">
          <MenuBar data={"Always Happy"} function={handelClickToAH} />
          <MenuBar data={"Healthy Eating"} function={handelClickToHE} />
          <MenuBar data={"Exercises and Fitness"} function={handelClickToEF} />
          <MenuBar data={"Local Supports"} function={handelClickToLS} />
          <MenuBar data={"Emergency Details"} function={handelClickToED} />
          <MenuBar data={"Reminders"} function={handelClickToREM} />
        </div>
      </div>
      <div className="contentContainer">
        <Routes>
          <Route path="/" element={<Content />}></Route>
          <Route path="/always Happy" element={<AlwaysHappy />}></Route>
          <Route
            path="/exercises and fitness"
            element={<ExercisesAndFitness />}
          ></Route>
          <Route path="/healthy eating" element={<HealthyEating />}></Route>
          <Route path="/local support" element={<LocalSupports />}></Route>
          <Route
            path="/emergency details"
            element={<EmergencyDetails />}
          ></Route>
          <Route
            path="/remainder details"
            element={<ReminderDetails />}
          ></Route>
        </Routes>
      </div>
    </div>
  );
};

export default Aside;
