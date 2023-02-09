import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AccordionData from "../../interfaces/AccordionData";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import SkillPill from "../expertise/SkillPill";
import fetchStaticImage from "../../hooks/fetchStaticImage";

const AccordionItem = (props: {
  item: AccordionData;
  isOpen: boolean;
  toggleAccordion: Function;
}) => {
  const companyLogo = fetchStaticImage(props.item.companyImagePath);

  function toggleAccordion(id: string) {
    console.log(id);
    props.toggleAccordion(id);
  }

  return (
    <div className="w-100">
      <button
        className={`accordionButton ${
          props.isOpen ? "--btn-active" : "--btn-inactive"
        } d-flex flex-row my-2 py-3 px-4 text-left justify-content-between align-items-center`}
        onClick={() => toggleAccordion(props.item.id)}
      >
        {props.item.buttonLabel}
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`${
            props.isOpen ? "--btn-active-icon" : "--btn-inactive-icon"
          }`}
        />
      </button>
      <div
        className={`accordionPanel p-4 my-3 ${
          props.isOpen ? "--showAccordion d-flex flex-row" : "--hideAccordion"
        }`}
      >
        <div className="row">
          <div className="col-md-9 col-xs-12 d-flex flex-column">
            <p>
              {props.item.workType} {props.item.workPeriod}
            </p>
            <p> {props.item.description}</p>
            <div className="d-flex flex-row flex-wrap">
              {props.item.technologies.map((tech) => {
                return <SkillPill pill={tech} key={tech} />;
              })}
            </div>
          </div>
          <div className="col-md-3 col-xs-12 order-md-last order-first text-center">
            <img
              className="companyLogo py-3"
              src={companyLogo}
              alt={props.item.id}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
