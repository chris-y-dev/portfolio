import React, { useEffect, useState } from "react";
import AccordionItem from "./AccordionItem";
import IExperienceAccordion from "../../interfaces/IExperienceAccordion";
import ExperienceAccordionData from "../../assets/data/ExperienceAccordionData";

const Accordion = () => {
  const [accordionData, setAccordionData] = useState<IExperienceAccordion[]>(
    [],
  );
  const [openItemId, setOpenItemId] = useState<string | null>(null);

  useEffect(() => {
    const data = ExperienceAccordionData;
    setAccordionData(data);

    const currentRole = data.find((item) => item.isCurrent);
    setOpenItemId(currentRole?.id ?? data[0]?.id ?? null);
  }, []);

  const handleToggle = (id: string) => {
    setOpenItemId((current) => (current === id ? null : id));
  };

  return (
    <div className="resume-timeline">
      {accordionData.map((item) => {
        const isOpen = openItemId === item.id;

        return (
          <div className="timeline-item-wrapper" key={item.id}>
            <AccordionItem
              item={item}
              isOpen={isOpen}
              onToggle={() => handleToggle(item.id)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
