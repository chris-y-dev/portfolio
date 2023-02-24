import React from "react";
import "./Hero.scss";
import "../../App.scss";
import { motion } from "framer-motion";
import BackToTopButton from "../backToTop/BackToTopButton";

const Hero = () => {
  const nameTitle = "CHRIS Y.";
  const subheading = "JUNIOR SOFTWARE ENGINEER, FRONT-END DEVELOPER";

  return (
    <div className="hero-container py-5" id="home">
      <div className="container">
        <motion.h1
          className="title text-shadow"
          aria-label={nameTitle}
          initial={{ y: "4rem" }}
          whileInView={{ y: "0rem" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {nameTitle}
        </motion.h1>
        <motion.h3
          className="subtitle text-shadow"
          aria-label={subheading}
          initial={{ y: "4rem" }}
          whileInView={{ y: "0rem" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {subheading}
        </motion.h3>
        <div className="introText_container">
          <motion.p
            className="introText"
            initial={{ y: "3rem" }}
            whileInView={{ y: "0rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            WELCOME TO MY PORTFOLIO, DEVELOPED USING REACT
          </motion.p>
          <motion.p
            className="introText my-5"
            initial={{ y: "3rem" }}
            whileInView={{ y: "0rem" }}
            viewport={{ once: true }}
            transition={{ duration: 1.0 }}
          >
            I ALSO LIKE TO DABBLE IN GRAPHIC DESIGN, DIGITAL DRAWING, AND 3D
            MODELLING USING BLENDER!
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
