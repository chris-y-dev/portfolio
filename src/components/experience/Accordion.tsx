import React, { useEffect, useState } from "react";
import AccordionItem from "./AccordionItem";
import IExperienceAccordion from "../../interfaces/IExperienceAccordion";
import { motion } from "framer-motion";
import ExperienceAccordionData from "../../assets/data/ExperienceAccordionData";

const Accordion = () => {
  const [accordionData, setAccordionData] = useState<IExperienceAccordion[]>(
    []
  );
  const [openedAccordion, setOpenedAccordion] = useState("");

  useEffect(() => {
    setAccordionData(ExperienceAccordionData);
    setOpenedAccordion(ExperienceAccordionData[0].id);
  }, []);

  const toggleAccordion = (id: string) => {
    if (openedAccordion !== id) {
      setOpenedAccordion(id);
    } else {
      setOpenedAccordion("");
    }
  };

  return (
    <div className="d-flex flex-column align-items-center w-100">
      {accordionData.map((item, index) => {
        return (
          <motion.div
            className={`w-100`}
            initial={{ y: "9rem" }}
            whileInView={{ y: "0rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 + index * 0.1 }}
            key={item.id}
          >
            <AccordionItem
              item={item}
              key={item.id}
              isOpen={openedAccordion === item.id ? true : false}
              toggleAccordion={toggleAccordion}
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default Accordion;
