import "./Achievements.scss";
import "../../App.scss";

import AchievementsAndEventsData from "../../assets/data/AchievementsAndEventsData";
import EventBlock from "./EventBlock";

const Achievements = () => {
  return (
    <div className="py-5 mb-5 --section-margin-lg" id="achievements">
      <div className="container border-red pt-5 mb-5" id="certifications">
        <h2 className="section-heading">CERTIFICATIONS & EVENTS</h2>
        <div className="row gx-2 gy-2 border-green">
          {AchievementsAndEventsData.filter((event) => {
            return (
              event.eventType.type !== "Hackathon" &&
              event.eventType.isWinner === false &&
              event.eventType.type !== "Education"
            );
          }).map((event) => (
            <div className="col-md-6 col-sm-12 entrance" key={event.title}>
              <EventBlock eventData={event} />
            </div>
          ))}
        </div>
      </div>

      <div className="container border-red pt-5 mb-5" id="education">
        <h2 className="section-heading">EDUCATION</h2>
        <div className="row gx-2 gy-2 border-green">
          {AchievementsAndEventsData.filter((event) => {
            return event.eventType.type === "Education";
          }).map((event) => (
            <div className="col-md-6 col-sm-12 entrance" key={event.title}>
              <EventBlock eventData={event} />
            </div>
          ))}
        </div>
      </div>

      <div className="container border-red mb-5">
        <h2 className="section-heading">ACHIEVEMENTS</h2>
        <div className="border-green row gy-2 gx-2">
          {AchievementsAndEventsData.filter((event) => {
            return (
              event.eventType.type === "Hackathon" &&
              event.eventType.isWinner === true
            );
          }).map((event) => (
            <div className="col-md-6 col-sm-12" key={event.title}>
              <EventBlock eventData={event} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
