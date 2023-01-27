import React from "react";
import Experience from "../components/experience/Experience";
import Expertise from "../components/expertise/Expertise";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";

const Home = () => {
  return (
    <div className="text-white vh-100 background-primary">
      <Header />
      <Hero />
      <Experience />
      <Expertise />
    </div>
  );
};

export default Home;
