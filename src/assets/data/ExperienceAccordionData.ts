import ExperienceAccordion from "../../interfaces/IExperienceAccordion";

const ExperienceAccordionData: ExperienceAccordion[] = [
  {
    id: "item1",
    buttonLabel: "Software Engineer Intern @ Xero",
    workType: "Full-time",
    workPeriod: "November 2022 - February 2023",
    description:
      "Worked in a Backend team that specialised in API development. Involved in various aspects of enterprise-level development, from debugging, writing unit tests, and implementing new features, to configuring Docker containers, pipelines and load-testing.",
    companyImagePath: "/experience/xero_logo.png",
    technologies: ["C#", "Dotnet", "Docker", "AWS", "TeamCity", "Git"],
  },
  {
    id: "item2",
    buttonLabel: "Frontend Developer @ Pegboard Software",
    workPeriod: "July 2022 - Ongoing",
    workType: "Part-time",
    description:
      "Developing SPA for large retail businesses. Includes customisable 3D models of products before users make an order. Also invovled developing UI for admin/internal business use. Majority of development invovled TypeScript, JavaScript and JS frameworks.",
    companyImagePath: "/experience/pegboardco_logo.png",
    technologies: [
      "TypeScript",
      "Angular",
      "Vectary",
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },
  {
    id: "item3",
    buttonLabel: "Web Desginer and Developer @ Bernies Music Land",
    workType: "Part-time",
    workPeriod: "May 2022 - Ongoing",
    description:
      "Maintenance of legacy websites using PHP, HTML, CSS and WordPress. Occasionally developed new UI components. Produced initial design of new website, balancing between UX and business requirements.",
    companyImagePath: "/experience/bml_logo.jpg",
    technologies: ["HTML", "CSS", "Photoshop", "Figma", "WordPress", "PHP"],
  },
];

export default ExperienceAccordionData;
