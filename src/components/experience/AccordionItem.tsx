import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FunctionComponent, PropsWithChildren } from "react";
import AccordionData from "../../interfaces/AccordionData";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import TechPill from "../expertise/TechPill";

const AccordionItem = (props: {
  item: AccordionData;
  isOpen: boolean;
  toggleAccordion: Function;
}) => {
  const toggleAccordion = (id: string) => {
    console.log(id);
    props.toggleAccordion(id);
  };

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
        className={`accordionPanel ${
          props.isOpen ? "--showAccordion d-flex flex-row" : "--hideAccordion"
        }`}
      >
        <div className="row">
          <div className="col d-flex flex-column">
            <p> {props.item.description}</p>
            <div className="d-flex flex-row flex-wrap">
              {props.item.technologies.map((tech) => {
                return <TechPill pill={tech} key={tech} />;
              })}
            </div>
          </div>
          <img
            className="col-md-3 col-sm-12 order-md-last order-first"
            src={props.item.companyImagePath}
            alt={props.item.id}
          />
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
