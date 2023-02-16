import React from "react";
import "./Achievements.scss";
import "../../App.scss";

import { faMedal } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const Achievements = () => {
  function getIconUsingEventType(eventType: string) {
    switch (eventType) {
      case "Event":
        return faCalendarCheck;
      case "Certification":
        return faGraduationCap;
      case "Win":
        return faMedal;
      default:
        return faCalendarCheck;
    }
  }

  return (
    <div className="py-5" id="#achievements">
      <div className="container border-red">
        <h2 className="section-heading">Achievements</h2>
        <div className="inner-container border-green">
          <div className="py-2 px-3 achievement_row d-flex flex-row align-items-center border-blue">
            <div className="icon_container">
              <FontAwesomeIcon icon={faMedal} size="2x" className="me-3" />
            </div>
            <div className="d-flex flex-column">
              <div className="">Hackathon 1st Place - UniHack</div>
              <div className="">July 2022</div>
            </div>
          </div>
        </div>
      </div>
      <div className="container border-red">
        <h2 className="section-heading">Certifications & Events</h2>
      </div>
    </div>
  );
};

export default Achievements;
