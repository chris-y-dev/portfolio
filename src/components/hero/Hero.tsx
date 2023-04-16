import React from "react";
import "./Hero.scss";
import "../../App.scss";
import { motion } from "framer-motion";
import BackToTopButton from "../backToTop/BackToTopButton";

const Hero = () => {
  const nameTitle = "CHRIS Y.";
  const subheading = "JUNIOR SOFTWARE ENGINEER";

  return (
    <div className="hero-container py-5" id="home">
      <div className="container d-flex flex-column">
        <motion.h1
          className="title text-shadow"
          aria-label={nameTitle}
          initial={{ y: "5rem" }}
          whileInView={{ y: "0rem" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {nameTitle}
        </motion.h1>
        <motion.h3
          className="subtitle text-shadow"
          aria-label={subheading}
          initial={{ y: "5rem" }}
          whileInView={{ y: "0rem" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {subheading}
        </motion.h3>
        <div className="introText_container">
          <motion.p
            className="introText my-5"
            initial={{ y: "3rem" }}
            whileInView={{ y: "0rem" }}
            viewport={{ once: true }}
            transition={{ duration: 1.0 }}
          >
            A <span className="mt_font">Paediatric Music Therapist</span> -
            turned - <span className="swe_font">Software Developer</span>, with
            over 1.5 years of enterprise-level development experience. In my
            free time, I also like to dabble in graphic design, digital
            illustrations, and 3D modelling!
          </motion.p>
        </div>
        {/* <div id="scroll_prompt_container" className="text-center">
          Scroll Down
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
