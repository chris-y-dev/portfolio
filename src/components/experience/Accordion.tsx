import React, {
  FunctionComponent,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";
import { idText } from "typescript";
import AccordionItem from "./AccordionItem";
import AccordionData from "../../interfaces/AccordionData";

const Accordion = () => {
  const items: AccordionData[] = [
    {
      buttonLabel: "Accordion item 1",
      id: "item1",
      content: "Text of accordion item 1",
    },
    {
      buttonLabel: "Accordion item 2",
      id: "item2",
      content: "Text of accordion item 2",
    },
    {
      buttonLabel: "Accordion item 3",
      id: "item3",
      content: "Text of accordion item 3",
    },
  ];
  //TODO: create accordion functions
  //Click = set id -> open
  const [accordionItemsArr, setAccordionItemsArr] = useState<AccordionData[]>(
    []
  );
  const [openedAccordion, setOpenedAccordion] = useState("");

  useEffect(() => {
    setAccordionItemsArr(items);
    setOpenedAccordion(items[0].id);
  }, []);

  const openAccordion = (id: string) => {
    setOpenedAccordion(id);


  return (
    <div className="d-flex flex-column align-items-center w-100">
      {items.map((item) => {
        return <AccordionItem item={item} key={item.id} />;
      })}
    </div>
  );
};

export default Accordion;
