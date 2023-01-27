import React, { FunctionComponent, PropsWithChildren } from "react";
import AccordionData from "../../interfaces/AccordionData";

const AccordionItem = (props: { item: AccordionData }) => {
  const toggleAccordion = (id: string) => {
    console.log(id);
  };

  return (
    <div className="w-100">
      <button
        className="accordionButton"
        onClick={() => toggleAccordion(props.item.id)}
      >
        {props.item.buttonLabel}
      </button>
      <div className="accordionPanel">
        <p> {props.item.content}</p>
      </div>
    </div>
  );
};

export default AccordionItem;
