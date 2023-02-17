import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Achievements from "../components/achievements/Achievements";
import Experience from "../components/experience/Experience";
import Expertise from "../components/expertise/Expertise";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import MyWork from "../components/myWork/MyWork";

const Home = () => {
  const location = useLocation();

  const [scrollToElement, setScrollToElement] = useState<HTMLElement | null>(
    null
  );

  const selectAndScrollToElementByHash = () => {
    var element: HTMLElement | null = document.getElementById(
      location.hash.slice(1)
    );

    setScrollToElement(element);

    scrollToElement?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    selectAndScrollToElementByHash();
  }, [scrollToElement]);

  return (
    <div className="text-white vh-100 backgorund-primary">
      <Header />
      <Hero />
      <Experience />
      {/* <div id="experience-bg" className="p-5"></div> */}
      <Achievements />
      <Expertise />
      <MyWork />
      <Footer />
    </div>
  );
};

export default Home;
