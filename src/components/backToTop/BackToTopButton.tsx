import React, { useEffect, useState } from "react";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./BackToTopButton.scss";

const BackToTopButton = () => {
  const [scrollY, setScrollY] = useState(0);

  function handleBackToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  useEffect(() => {
    window.addEventListener("scroll", (event) => {
      setScrollY(window.scrollY);
    });
  });

  return (
    <button
      onClick={handleBackToTop}
      id="backToTopButton"
      className={`backToTopButton ${scrollY !== 0 ? "--display_btn" : ""}`}
      title="Back To Top"
    >
      <FontAwesomeIcon icon={faArrowUp} className="backToTop_icon" />
    </button>
  );
};

export default BackToTopButton;
