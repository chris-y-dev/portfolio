import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AccordionData from "../../interfaces/IExperienceAccordion";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faBriefcase, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import SkillPill from "../expertise/SkillPill";
import fetchStaticImage from "../../hooks/fetchStaticImage";
import "../../App.scss";

const AccordionItem = (props: {
  item: AccordionData;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  const companyLogo = fetchStaticImage(props.item.companyImagePath);

  function replaceWithBr(desc: string) {
    return desc.replace(/\n/g, "<br />");
  }

  function getCollapsedPreview(desc: string) {
    const normalized = desc.replace(/\s+/g, " ").trim();

    if (normalized.length <= 180) {
      return `${normalized}${normalized.length > 0 ? "…" : ""}`;
    }

    return `${normalized.slice(0, 180).trim()}…`;
  }

  return (
    <div
      className={`timeline-item ${props.item.isMusicTherapy ? "timeline-music" : "timeline-swe"} ${props.isOpen ? "is-open" : "is-collapsed"}`}
    >
      <div className="timeline-marker">
        <span className="timeline-dot"></span>
      </div>

      <div className="timeline-card">
        <button
          type="button"
          className="timeline-trigger"
          onClick={props.onToggle}
          aria-expanded={props.isOpen}
          aria-controls={`experience-panel-${props.item.id}`}
        >
          <div className="timeline-header">
            <div>
              <p className="timeline-date">
                <FontAwesomeIcon icon={faCalendar} className="me-2" />
                {props.item.workPeriod}
              </p>
              <h3 className="timeline-title">{props.item.buttonLabel}</h3>
            </div>
            <div className="timeline-header-actions">
              <img
                className="companyLogo"
                src={companyLogo}
                alt={props.item.id}
              />
            </div>
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

          {!props.isOpen && (
            <div className="timeline-preview-block">
              <p className="timeline-preview">
                {getCollapsedPreview(props.item.description)}
              </p>
              <span className="timeline-expand-indicator" aria-hidden="true">
                <span>Read more</span>
                <FontAwesomeIcon icon={faChevronDown} />
              </span>
            </div>
          )}
        </button>

        {props.isOpen && (
          <div
            id={`experience-panel-${props.item.id}`}
            className="timeline-panel"
          >
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
        )}
      </div>
    </div>
  );
};

export default AccordionItem;
