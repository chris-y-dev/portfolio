import React from "react";
import "./Hero.scss";
import "../../App.scss";
let heroGif = require("../../assets/sample.gif");

const Hero = () => {
  return (
    <div className="border-blue hero-container py-5">
      <div className="container">
        <h1 className="title text-shadow">CHRIS Y.</h1>
        <h3 className="subtitle text-shadow">
          SOFTWARE ENGINEER, WEB DESIGNER
        </h3>
      </div>
    </div>
  );
};

export default Hero;
