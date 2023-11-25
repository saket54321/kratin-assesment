import React from "react";
import "./menuBar.css";

const MenuBar = (props) => {
  return (
    <div className="menuBarData" onClick={props.function}>
      {props.data}
    </div>
  );
};

export default MenuBar;
