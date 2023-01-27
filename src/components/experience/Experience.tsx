import React from "react";
import "./Experience.scss";
import "../../App.scss";
import Accordion from "./Accordion";

const Experience = () => {
  return (
    <div className="border-blue py-5">
      <div className="container">
        <h1>My Experience</h1>
        <div className="w-100">
          <Accordion />
        </div>
      </div>
    </div>
  );
};

export default Experience;
