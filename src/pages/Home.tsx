import React from "react";
import Experience from "../components/experience/Experience";
import Expertise from "../components/expertise/Expertise";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import MyWork from "../components/myWork/MyWork";

const Home = () => {
  return (
    <div className="text-white vh-100 backgorund-primary">
      <Header />
      <Hero />
      <Experience />
      <Expertise />
      <MyWork />
    </div>
  );
};

export default Home;
