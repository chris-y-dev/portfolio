import React from "react";

const AccordionItem = (props: any) => {
  return (
    <div className="w-100">
      <button className="accordionButton">{props.data.label}</button>
      <div className="accordionPanel">
        <p> {props.data.content}</p>
      </div>
    </div>
  );
};

export default AccordionItem;
