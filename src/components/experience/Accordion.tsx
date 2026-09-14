import React, { useEffect, useState } from "react";
import AccordionItem from "./AccordionItem";
import IExperienceAccordion from "../../interfaces/IExperienceAccordion";
import ExperienceAccordionData from "../../assets/data/ExperienceAccordionData";

const Accordion = () => {
  const [accordionData, setAccordionData] = useState<IExperienceAccordion[]>(
    [],
  );

  useEffect(() => {
    setAccordionData(ExperienceAccordionData);
  }, []);

  return (
    <div className="resume-timeline">
      {accordionData.map((item) => {
        return (
          <div className="timeline-item-wrapper" key={item.id}>
            <AccordionItem item={item} key={item.id} />
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
