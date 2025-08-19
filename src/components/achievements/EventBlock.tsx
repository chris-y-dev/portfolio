import { faMedal } from "@fortawesome/free-solid-svg-icons";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";
import { faCloud } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EventData from "../../interfaces/IAchievementsAndEvents";
import { motion } from "framer-motion";

const EventBlock = (props: { eventData: EventData }) => {
  function getIconUsingEventType(eventData: EventData) {
    switch (eventData.eventType.type) {
      case "Cloud":
        return faCloud;
      case "Certification":
      case "Education":
        return faGraduationCap;
      case "Hackathon":
        if (eventData.eventType.isWinner) {
          return faMedal;
        } else {
          return faCalendarCheck;
        }
      case "Event":
      default:
        return faCalendarCheck;
    }
  }

  function getClassNameUsingEventType(eventData: EventData) {
    switch (eventData.eventType.type) {
      case "Hackathon":
        switch (eventData.eventType.place) {
          case 1:
            return "--firstPlace";
          case 2:
            return "--secondPlace";
          case 3:
            return "--thirdPlace";
          default:
            return "--completion";
        }
      case "Certification":
        return "--certification";

      case "Cloud":
        let str = "--cloud";
        switch (eventData.eventType.companyColour) {
          case "Microsoft":
            str += " --microsoft";
            break;
          case "AWS":
            str += " --aws";
            break;
          case "Oracle":
            str += " --oracle";
            break;
          default:
            str += "";
        }
        return str;

      case "Education":
        if (eventData.eventType.hasIconColour) {
          return "--education";
        } else {
          return "--completion";
        }

      default:
        return "--completion";
    }
  }

  function generateLinkClass(url: string | undefined) {
    if (url) {
      return "--link_active";
    } else {
      return "--link_inactive";
    }
  }

  function showOrHideLinkIcon(url: string | undefined) {
    if (url) {
      return "--show_icon";
    } else {
      return "--hide_icon";
    }
  }

  return (
    <motion.div
      className="eventBlock_motionContainer"
      initial={{ y: "9rem" }}
      whileInView={{ y: "0rem" }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <a
        href={props.eventData.link}
        className={`eventBlock_link ${generateLinkClass(props.eventData.link)}`}
      >
        <div className="eventBlock_container d-flex flex-row align-items-center py-3 px-3">
          <div className="icon_container">
            <FontAwesomeIcon
              icon={getIconUsingEventType(props.eventData)}
              size="2x"
              className={`me-3 ${getClassNameUsingEventType(props.eventData)}`}
            />
          </div>
          <div className="d-flex flex-column ms-2 me-1">
            <div className="--event-title">{props.eventData.title}</div>
            <div className="--event-date mt-2">{props.eventData.date}</div>
          </div>
          <div
            className={`link_icon align-self-center ms-auto ${showOrHideLinkIcon(
              props.eventData.link
            )}`}
          >
            <FontAwesomeIcon icon={faArrowAltCircleRight} size="lg" />
          </div>
        </div>
      </a>
    </motion.div>
  );
};

export default EventBlock;
