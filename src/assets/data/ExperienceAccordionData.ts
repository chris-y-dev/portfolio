import ExperienceAccordion from "../../interfaces/IExperienceAccordion";

const ExperienceAccordionData: ExperienceAccordion[] = [
  {
    id: "item0",
    buttonLabel: "Software Engineer @ Xero",
    isCurrent: true,
    workType: "Full-time",
    workPeriod: "Feb 2025 - Current",
    description:
      "In the Payments space, I'm building full-stack solutions from backend architecture to customer-facing UIs. My main work is building an event-driven, serverless payment system with a focus on idempotency and reliability.\n\nI love taking on technological challenges such as implementing idempotent webhook flows to ensure safe and consistent payment processing, and uplifting our application observability to better detect and resolve customer issues in the payment flow.",
    companyImagePath: "/experience/xero_logo.png",
    technologies: [
      "C#/.NET",
      "Severless Architecture",
      "DynamoDB",
      "SQL",
      "Lambdas/Step Functions",
      "AWS",
    ],
  },
  {
    id: "item1",
    buttonLabel: "Graduate Software Engineer @ Xero",
    workType: "Full-time",
    workPeriod: "Feb 2024 - Feb 2025",
    description:
      "My favorite aspect of being a Graduate Software Enginee was rotating across 3 teams, gaining hands-on experience working on backend, security, and full-stack development.\n\nI worked on new & legacy applications of both microservice/monolithic architectures, as well as automation of various tasks.\n\nUnder the guidance of experienced engineers, I am getting a deeper understanding of CLEAN architecture principles, various levels of software testing, and observed how software engineering requirements are negotiated and made.",
    companyImagePath: "/experience/xero_logo.png",
    technologies: [
      "C#/.NET",
      "SQL",
      "DynamoDB",
      "StepFunctions",
      "Health Monitoring",
      "Unit/Component/Integration/E2E Testing",
      "Containerization",
    ],
  },
  {
    id: "item2",
    buttonLabel: "Software Engineer @ JDoodle",
    workType: "Full-time",
    workPeriod: "May 2023 - February 2024",
    description:
      "JDoodle is an Australian startup providing web-based compilers & coding-related solutions. I worked in the front-end team, wearing many hats at once. I was responsible for framework upgrade (Vue 3), implementing new features, and decision making on frontend architecture.\n\nMy most memorable achievement was designing the architecture & implementing a content-management application, which enabled the marketing team to freely add new articles/documentation/blogs to the website without the need for a software engineer to make changes to the code.\n\nManaging a large enterprise-level code base is difficult - so I adhered to best practices/patterns particularly the Single Responsibility Principle (SRP), Dependency Inversion Principle (DIP) and Component State Management.",
    companyImagePath: "/experience/jdoodle_logo.png",
    technologies: [
      "Typescript",
      "Vue 2",
      "Vue 3",
      "GraphQL",
      "Docker",
      "Strapi",
      "SRP/DIP",
      "State Management",
    ],
  },
  {
    id: "item3",
    buttonLabel: "Software Engineer Intern @ Xero",
    workType: "Full-time",
    workPeriod: "November 2022 - February 2023",
    description:
      "Worked in a back-end team that specialised in API development at an ASX-listed accounting software company. I was responsible for developing features, debugging, writing unit tests, and configuring Docker containers. Experienced elements of Extreme Programming and contributed in an Agile environment.\n\nMy greatest achievement was creating a new learning projects for future interns joining this team, since this team had not previously had an intern.",
    companyImagePath: "/experience/xero_logo.png",
    technologies: ["C#", "Dotnet", "Docker", "AWS", "TeamCity", "Git"],
  },
  {
    id: "item4",
    buttonLabel: "Frontend Developer @ Pegboard Software",
    workPeriod: "July 2022 - June 2023",
    workType: "Part-time",
    description:
      "Developing custom web-applications and CRMs at a software company, for clients from various industries. My role requires me to be autonomous, proactively make decisions, take initiatives to learn new technologies/libraries, and communicate with various stakeholders through creating clear documentation.\n\nMy biggest achievement was leading the development of a new e-commerce app that incorporates 3D models.",
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
    id: "item5",
    buttonLabel: "Web Desginer and Developer @ Bernies Music Land",
    workType: "Casual",
    workPeriod: "May 2022 - Feb 2023",
    description:
      "Responsible for the maintenance, debugging and development of multiple legacy websites for a piano distribution business. Work invovled using code and WordPress WooCommerce.\n\nMy greatest achievement was producing the initial design and hi-fidelity prototype of the new website, balancing between complex UX and business requirements.",
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
  {
    id: "item6",
    buttonLabel: "Paediatric Music Therapist @ Various Melbourne clinics",
    workType: "Full-time",
    workPeriod: "May 2020 - Jan 2023",
    description:
      "As a Paediatric Music Therapist, I used music to support children and adolescents in achieving developmental and personal goals. I provided therapy services for clients with diverse disabilities and needs, consulted with families and staff to offer educational and therapeutic guidance, and maintained confidential documentation.\n\n This experience strengthened my skills in empathy, communication, and problem-solving — qualities I now carry into my work as a Software Engineer.",
    companyImagePath: "/experience/amta_logo.png",
    technologies: [
      "Empathy & Active Listening",
      "Clear Verbal Communication",
      "Conflict Resolution",
      "Facilitating Group Dynamics",
      "Adaptability",
    ],
    isMusicTherapy: true,
  },
];

export default ExperienceAccordionData;
