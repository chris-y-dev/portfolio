import React from "react";
import "./Hero.scss";
import "../../App.scss";
let heroGif = require("../../assets/sample.gif");

const Hero = () => {
  return (
    <div className="border-blue hero-container py-4">
      <div className="container">
        <h1 className="title-font text-shadow">CHRIS Y.</h1>
        <h3 className="text-shadow">SOFTWARE ENGINEER, WEB DESIGNER</h3>
      </div>
    </div>
  );
};

export default Hero;
