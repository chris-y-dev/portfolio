import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FunctionComponent, PropsWithChildren } from "react";
import AccordionData from "../../interfaces/AccordionData";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

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
          props.isOpen ? "btn-active" : "btn-inactive"
        } d-flex flex-row my-2 py-3 px-4 text-left justify-content-between align-items-center`}
        onClick={() => toggleAccordion(props.item.id)}
      >
        {props.item.buttonLabel}
        <FontAwesomeIcon icon={faChevronDown} />
      </button>
      <div
        className={`accordionPanel ${
          props.isOpen ? "showAccordion" : "hideAccordion"
        }`}
      >
        <p> {props.item.content}</p>
      </div>
    </div>
  );
};

export default AccordionItem;
