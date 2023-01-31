import React, { FunctionComponent, PropsWithChildren } from "react";
import AccordionData from "../../interfaces/AccordionData";

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
        className="accordionButton my-2 py-3 px-4 text-left"
        onClick={() => toggleAccordion(props.item.id)}
      >
        {props.item.buttonLabel}
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
