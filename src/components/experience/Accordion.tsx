import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import AccordionItem from "./AccordionItem";
import IExperienceAccordion from "../../interfaces/IExperienceAccordion";
import ExperienceAccordionData from "../../assets/data/ExperienceAccordionData";

const Accordion = () => {
  const [accordionData, setAccordionData] = useState<IExperienceAccordion[]>(
    [],
  );
  const [openItemId, setOpenItemId] = useState<string | null>(null);
  const pendingAnchor = useRef<{
    element: HTMLButtonElement;
    top: number;
  } | null>(null);

  useEffect(() => {
    const data = ExperienceAccordionData;
    setAccordionData(data);

    const currentRole = data.find((item) => item.isCurrent);
    setOpenItemId(currentRole?.id ?? data[0]?.id ?? null);
  }, []);

  useLayoutEffect(() => {
    const anchor = pendingAnchor.current;
    if (!anchor) return;

    pendingAnchor.current = null;
    if (!window.matchMedia("(max-width: 767.98px)").matches) return;

    const scrollAmount =
      anchor.element.getBoundingClientRect().top - anchor.top;
    if (Math.abs(scrollAmount) < 1) return;

    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)")
      .matches
      ? "auto"
      : "smooth";
    window.scrollBy({ top: scrollAmount, behavior });
  }, [openItemId]);

  const handleToggle = (id: string, element: HTMLButtonElement) => {
    if (openItemId !== null && openItemId !== id) {
      pendingAnchor.current = {
        element,
        top: element.getBoundingClientRect().top,
      };
    }

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
              onToggle={(element) => handleToggle(item.id, element)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
