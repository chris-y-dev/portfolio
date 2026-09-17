import ExperienceAccordion from "../../interfaces/IExperienceAccordion";

const ExperienceAccordionData: ExperienceAccordion[] = [
  {
    id: "item0",
    buttonLabel: "Software Engineer @ Xero",
    isCurrent: true,
    workType: "Full-time",
    workPeriod: "Feb 2025 - Current",
    description:
      "In the Payments space, I design and deliver full-stack solutions across backend architecture and customer-facing UIs. My core focus is building and maintaining an event-driven bill payment system processing millions in monthly USD transactions across third-party payment providers (Melio, Airwallex, Crezco).\n\nA highlight was diagnosing a silent payment loss issue in production - payments were being silently dropped due to a composite key clash caused by inaccurate webhook payloads. I identified the root cause independently and authored a Technical Design Record (TDR) with database re-schema options to restore payment integrity.\n\nI also led the technical investigation and problem decomposition for a new invoiceless payment system, and improved team observability by introducing automated testing, alerting and monitoring pipelines (New Relic, Sumo Logic). I mentor graduate and intern engineers through onboarding and code review.",
    companyImagePath: "/experience/xero_logo.png",
    technologies: [
      "C#/.NET",
      "React",
      "Event-Driven Architecture",
      "AWS",
      "Idempotency & Retry Patterns",
      "Observability at Scale",
    ],
  },
  {
    id: "item1",
    buttonLabel:
      "Graduate Software Engineer @ Xero (Product, Security rotations)",
    workType: "Full-time",
    workPeriod: "Feb 2024 - Feb 2025",
    description:
      "As a Graduate, I rotated across three teams - payments, security, and payroll - gaining hands-on experience across backend, security engineering, and full-stack development.\n\nDuring my Security rotation, I built a Python-based Fraud Alert System that reduced fraudulent sign-ups by tens of thousands, incorporating device fingerprinting, phone number blacklisting, and geo-IP mismatch detection. I also tuned SIEM detection rules to surface high-risk employee sign-ins, and automated security incident response playbooks using AWS Step Functions.\n\nDuring my Payroll rotation, I contributed to extracting a core business monolith into microservices, running parallel testing between old and new services with a gradual rollout to ensure zero regression for existing users.\n\nAcross all rotations, I developed a deeper understanding of software architecture tradeoffs, reliability engineering, and how technical decisions are negotiated in large-scale production environments.",
    companyImagePath: "/experience/xero_logo.png",
    technologies: [
      "C#/.NET",
      "React",
      "AWS",
      "SQL",
      "Parallel Testing",
      "Kubernetes",
    ],
  },
  {
    id: "item2",
    buttonLabel: "Software Engineer @ JDoodle",
    workType: "Full-time",
    workPeriod: "May 2023 - Feb 2024",
    description:
      "JDoodle is an Australian seed-stage startup providing web-based compilers and coding solutions. Working in a fast-paced environment with high autonomy, I was responsible for translating ambiguous CEO and investor requirements into shipped production features.\n\nMy most significant contribution was spiking and implementing a full Strapi CMS integration - designing both the frontend and backend data models - enabling the marketing team to manage all published content independently without developer involvement.\n\nI also led the Vue 2 to Vue 3 migration, delivered a new IDE feature, and drove a full frontend overhaul, maintaining production stability throughout. I consistently applied best practices including the Single Responsibility Principle and Component State Management across a large enterprise-level codebase.",
    companyImagePath: "/experience/jdoodle_logo.png",
    technologies: ["Typescript", "Vue.js", "GraphQL", "Strapi Headless CMS"],
  },
  {
    id: "item3",
    buttonLabel: "Software Engineer Intern @ Xero",
    workType: "Full-time",
    workPeriod: "Nov 2022 - Feb 2023",
    description:
      "Worked in a backend team specialising in C#/.NET API development at Xero, one of Australia's largest ASX-listed software companies. I contributed to full-cycle API development - implementing features, writing unit tests, debugging, and configuring Docker containers - with a focus on lambdas, webhooks, and queues for scalable, reliable payment systems.\n\nMy most memorable contribution was authoring a comprehensive onboarding guide adopted by subsequent intern cohorts, reducing ramp-up time for new team members joining the team. I also gained hands-on experience with Agile delivery, Extreme Programming practices, and AWS infrastructure.",
    companyImagePath: "/experience/xero_logo.png",
    technologies: ["C# / .NET", "AWS", "CI/CD (TeamCity)", "Git", "Docker"],
  },
  {
    id: "item4",
    buttonLabel: "Frontend Developer @ Pegboard Software",
    workPeriod: "Jul 2022 - Jun 2023",
    workType: "Part-time",
    description:
      "Developed custom web applications and CRMs for clients across various industries at a small software business. The role required strong autonomy, proactive decision-making, and clear communication with diverse stakeholders.\n\nMy most significant achievement was leading the end-to-end delivery of Quintrex's Build My Boat e-commerce Angular app - introducing interactive 3D product visualisation as a new capability. I drove the full project lifecycle: feasibility investigation, technology selection (Vectary), implementation, and requirements coordination with an external 3D modeller.\n\nI also developed SPAs and CRM interfaces in Angular and TypeScript, and maintained clear technical documentation throughout.",
    companyImagePath: "/experience/pegboardco_logo.png",
    technologies: ["TypeScript/JavaScript", "Angular", "Vectary", "HTML/CSS"],
  },
  {
    id: "item5",
    buttonLabel: "Web Desginer and Developer @ Bernies Music Land",
    workType: "Casual",
    workPeriod: "May 2022 - Feb 2023",
    description:
      "Responsible for the maintenance, debugging and development of multiple legacy websites for a piano distribution business, working across custom code and WordPress WooCommerce.\n\nMy greatest achievement was producing the initial design and high-fidelity prototype of the new website - balancing complex UX requirements with business needs, and delivering a design the client could clearly understand and engage with. This experience strengthened my skills in translating non-technical business requirements into practical, user-centred digital solutions.",
    companyImagePath: "/experience/bml_logo.jpg",
    technologies: ["HTML", "CSS", "PHP", "SQL"],
  },
  {
    id: "item6",
    buttonLabel: "Paediatric Music Therapist @ Various Melbourne clinics",
    workType: "Full-time",
    workPeriod: "May 2020 - Jan 2023",
    description:
      "As a Paediatric Music Therapist, I designed and delivered therapy programmes for children and adolescents targeting speech, school readiness, and social skill development across various Melbourne clinics.\n\nI collaborated closely with families to set goals, manage expectations, and communicate outcomes - developing strong skills in tailoring complex specialist information for non-specialist audiences. I also maintained confidential documentation and consulted with multidisciplinary teams to ensure coordinated care.\n\nThis experience shaped how I approach software engineering today - with empathy for end users, clear communication across technical and non-technical stakeholders, and a structured, goal-oriented approach to problem solving.",
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
