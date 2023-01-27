import React, { useState } from "react";
import { idText } from "typescript";
import AccordionItem from "./AccordionItem";

const Accordion = () => {
  //TODO: create accordion functions
  //Click = set id -> open
  const [accordionItemsArr, setAccordionItemsArr] = useState([]);
  const [openedAccordion, setOpenedAccordion] = useState("");

  const item = {
    label: "Accordion item",
    id: "item1",
    content: "Text of accordion item 1",
  };

  return (
    <div className="d-flex flex-column align-items-center w-100">
      <AccordionItem data={item} />
    </div>
  );
};

export default Accordion;
