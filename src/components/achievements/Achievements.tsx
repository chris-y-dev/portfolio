import React from "react";
import "./Achievements.scss";
import "../../App.scss";

import eventData from "../../assets/data/EventsData";
import EventBlock from "./EventBlock";

const Achievements = () => {
  return (
    <div className="py-5 mb-5" id="achievements">
      <div className="container border-red mb-5">
        <h2 className="section-heading">Achievements</h2>
        <div className="border-green row gy-2 gx-2">
          {eventData
            .filter((event) => {
              return (
                event.eventType.type === "Hackathon" &&
                event.eventType.isWinner === true
              );
            })
            .map((event) => (
              <div className="col-md-6 col-sm-12">
                <EventBlock eventData={event} />
              </div>
            ))}
        </div>
      </div>
      <div className="container border-red">
        <h2 className="section-heading">Certifications & Events</h2>
        <div className="row gx-2 gy-2 border-green">
          {eventData
            .filter((event) => {
              return (
                event.eventType.type !== "Hackathon" &&
                event.eventType.isWinner === false
              );
            })
            .map((event) => (
              <div className="col-md-6 col-sm-12">
                <EventBlock eventData={event} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
