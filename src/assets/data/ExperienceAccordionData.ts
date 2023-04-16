import ExperienceAccordion from "../../interfaces/IExperienceAccordion";

const ExperienceAccordionData: ExperienceAccordion[] = [
  {
    id: "item1",
    buttonLabel: "Software Engineer Intern @ Xero",
    workType: "Full-time",
    workPeriod: "November 2022 - February 2023",
    description:
      "Worked in a Backend team that specialised in API development at an ASX-listed accounting software company. I was responsible for developing features, debugging, writing unit tests, and configuring Docker containers. Opportunity to use enterprise-level tools include Jira, TeamCity pipelines and Confluence.\n\nMy greatest achievement was creating an new learning guide for future interns joining this team, since this team had not previously had an intern.",
    companyImagePath: "/experience/xero_logo.png",
    technologies: ["C#", "Dotnet", "Docker", "AWS", "TeamCity", "Git"],
  },
  {
    id: "item2",
    buttonLabel: "Frontend Developer @ Pegboard Software",
    workPeriod: "July 2022 - Ongoing",
    workType: "Part-time",
    description:
      "Developing custom web-applications and CRMs for clients from various industries. My role requires me to be autonomous and pro-active, taking on various responsbilities in a small software company. Also responsible for researching and learning new APIs/libraries, and creating documentation for internal use.\n\nMy biggest achievement was leading the development of a new e-commerce app that incorporates 3D models.",
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
    workType: "Casual",
    workPeriod: "May 2022 - Feb 2023",
    description:
      "Responsible for maintenance, debugging and development of multiple legacy websites for a piano distribution business. Work invovled using code and WordPress WooCommerce.\n\nMy greatest achievement was producing the initial design and hi-fidelity prototype of the new website, balancing between complex UX and business requirements.",
    companyImagePath: "/experience/bml_logo.jpg",
    technologies: [
      "HTML",
      "CSS",
      "Photoshop",
      "Figma",
      "WordPress",
      "PHP",
      "SQL",
    ],
  },
];

export default ExperienceAccordionData;
