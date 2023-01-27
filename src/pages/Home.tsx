import React from "react";
import Experience from "../components/experience/Experience";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";

const Home = () => {
  return (
    <div className="text-white vh-100 background-primary">
      <Header />
      <Hero />
      <Experience />
    </div>
  );
};

export default Home;
