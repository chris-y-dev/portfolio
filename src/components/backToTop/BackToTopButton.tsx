import React, { useEffect, useState } from "react";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./BackToTopButton.scss";

const BackToTopButton = () => {
  function handleBackToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <button
      onClick={handleBackToTop}
      className="backToTopButton"
      title="Back To Top"
    >
      <FontAwesomeIcon icon={faArrowUp} className="backToTop_icon" />
    </button>
  );
};

export default BackToTopButton;
