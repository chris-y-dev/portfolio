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
      id: "item1",
      buttonLabel: "Software Engineer Intern @ Xero",
      description:
        "Carry out requried tasks as an intern. Carry out requried tasks as an intern. Carry out requried tasks as an intern. Carry out requried tasks as an intern.",
      companyImagePath: "/expertise/xero_logo.png",
      technologies: ["C#", "dotnet", "Docker", "AWS", "TeamCity"],
    },
    {
      id: "item2",
      buttonLabel: "Frontend Developer @ Pegboard",
      description:
        "Develop SPA for large retail businesses. Users can customise 3D models of products before making an order. Also developed UI for admin/internal use for businesses. Most of the work invovled JavaScript and JS frameworks.",
      companyImagePath: "/expertise/pegboardco_logo.png",
      technologies: [
        "TypeScript",
        "Angular",
        "Vectary",
        "HTML",
        "CSS",
        "JavaScript",
        "Git",
      ],
    },
    {
      id: "item3",
      buttonLabel: "Web Desginer and Developer @ BerniesMusicLand",
      description:
        "Carried out maintenance of legacy websites using PHP, HTML, CSS and WordPress. Invovled in the initial design of new website, balancing between UX and business requirements.",
      companyImagePath: "/expertise/bml_logo.jpg",
      technologies: ["HTML", "CSS", "Photoshop", "Figma", "WordPress", "PHP"],
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

  const toggleAccordion = (id: string) => {
    if (openedAccordion !== id) {
      setOpenedAccordion(id);
    } else {
      setOpenedAccordion("");
    }
  };

  return (
    <div className="d-flex flex-column align-items-center w-100">
      {items.map((item) => {
        return (
          <AccordionItem
            item={item}
            key={item.id}
            isOpen={openedAccordion === item.id ? true : false}
            toggleAccordion={toggleAccordion}
          />
        );
      })}
    </div>
  );
};

export default Accordion;
