import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AccordionData from "../../interfaces/IExperienceAccordion";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import SkillPill from "../expertise/SkillPill";
import fetchStaticImage from "../../hooks/fetchStaticImage";
import "../../App.scss";

const AccordionItem = (props: { item: AccordionData }) => {
  const companyLogo = fetchStaticImage(props.item.companyImagePath);

  function replaceWithBr(desc: string) {
    return desc.replace(/\n/g, "<br />");
  }

  return (
    <div
      className={`timeline-item ${props.item.isMusicTherapy ? "timeline-music" : "timeline-swe"}`}
    >
      <div className="timeline-marker">
        <span className="timeline-dot"></span>
      </div>

      <div className="timeline-card">
        <div className="timeline-header">
          <div>
            <p className="timeline-date">
              <FontAwesomeIcon icon={faCalendar} className="me-2" />
              {props.item.workPeriod}
            </p>
            <h3 className="timeline-title">{props.item.buttonLabel}</h3>
          </div>
          <img className="companyLogo" src={companyLogo} alt={props.item.id} />
        </div>

        <div className="timeline-meta">
          <span>
            <FontAwesomeIcon icon={faBriefcase} className="me-2" />
            {props.item.workType}
          </span>
          {props.item.isCurrent && (
            <span className="current_pill">Current</span>
          )}
        </div>

        <p
          className="timeline-description"
          dangerouslySetInnerHTML={{
            __html: replaceWithBr(props.item.description),
          }}
        />

        <div className="timeline-skills">
          {props.item.technologies.map((tech) => {
            return <SkillPill pill={tech} key={tech} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
