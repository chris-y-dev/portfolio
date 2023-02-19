import React, { MutableRefObject } from "react";
import "./Achievements.scss";
import "../../App.scss";

import eventData from "../../assets/data/EventsData";
import EventBlock from "./EventBlock";
import { motion } from "framer-motion";

const Achievements = () => {
  return (
    <div className="py-5 mb-5 --section-margin-lg" id="achievements">
      <div className="container border-red mb-5">
        <h2 className="section-heading">ACHIEVEMENTS</h2>
        <div className="border-green row gy-2 gx-2">
          {eventData
            .filter((event) => {
              return (
                event.eventType.type === "Hackathon" &&
                event.eventType.isWinner === true
              );
            })
            .map((event, i) => (
              <motion.div
                className="col-md-6 col-sm-12"
                initial={{ y: "9rem" }}
                whileInView={{ y: "0rem" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 + i * 0.2 }}
              >
                <EventBlock eventData={event} />
              </motion.div>
            ))}
        </div>
      </div>
      <div className="container border-red pt-5">
        <h2 className="section-heading">CERTIFICATIONS & EVENTS</h2>
        <div className="row gx-2 gy-2 border-green">
          {eventData
            .filter((event) => {
              return (
                event.eventType.type !== "Hackathon" &&
                event.eventType.isWinner === false
              );
            })
            .map((event, i) => (
              <motion.div
                className="col-md-6 col-sm-12 entrance"
                initial={{ y: "9rem" }}
                whileInView={{ y: "0rem" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 + i * 0.2 }}
              >
                <EventBlock eventData={event} />
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
