import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Achievements from "../components/achievements/Achievements";
import Experience from "../components/experience/Experience";
import Expertise from "../components/expertise/Expertise";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
// import MyWork from "../components/myWork/MyWork";

const Home = () => {
  const location = useLocation();

  const [scrollToElement, setScrollToElement] = useState<HTMLElement | null>(
    null,
  );

  useEffect(() => {
    function selectAndScrollToElementByHash() {
      var element: HTMLElement | null = document.getElementById(
        location.hash.slice(1),
      );

      console.log("Scroll function");

      setScrollToElement(element!);
      if (element) {
        scrollToElement?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }

    selectAndScrollToElementByHash();
  }, [scrollToElement, location.hash]);

  return (
    <div className="text-white vh-100 backgorund-primary">
      <Header />
      <Hero />
      <div
        className="announcement-bar"
        aria-label="Professional highlights banner"
      >
        <div className="announcement-inner">
          <span>AWS &amp; Azure Certified</span>
          <span>Enterprise&amp; Startup</span>
          <span>Australian Citizen</span>
          <span>Canberra · ACT</span>
        </div>
      </div>
      <Experience />
      <Achievements />
      <Expertise />
      {/* <MyWork /> */}
      <Footer />
    </div>
  );
};

export default Home;
