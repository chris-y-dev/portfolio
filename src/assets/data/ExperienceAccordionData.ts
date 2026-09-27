import ExperienceAccordion from "../../interfaces/IExperienceAccordion";

const ExperienceAccordionData: ExperienceAccordion[] = [
  {
    id: "item0",
    buttonLabel: "Software Engineer @ Xero",
    isCurrent: true,
    workType: "Full-time",
    workPeriod: "Feb 2024 - Current",
    description:
      "In the Payments space, my core focus is building and maintaining a full-stack, event-driven bill payment system that processes millions of USD in monthly transactions through third-party payment providers (Melio, Airwallex, Crezco).\n\nA highlight was diagnosing a silent payment loss issue in production: payments were being dropped due to a composite key clash caused by inaccurate webhook payloads. I identified the root cause and authored a Technical Design Record (TDR) outlining database re-schema options to restore payment integrity.\n\nI also led the technical investigation and problem decomposition for a new invoiceless payment system, and improved observability by introducing automated testing and alerting pipelines (New Relic, Sumo Logic). I mentored graduate and intern engineers through onboarding and code review.",
    priorRole: [
      {
        title: "Graduate Security Engineer",
        workPeriod: "2024",
        description:
          "During my Security rotation, I contributed to a Python-based Fraud Alert System that reduced fraudulent sign-ups by tens of thousands. The system incorporated device fingerprinting, phone number blacklisting, and geo-IP mismatch detection.\n\nI also tuned SIEM detection rules to surface high-risk employee sign-ins and automated security incident response playbooks using AWS Step Functions.",
        skills: [
          "Python",
          "SIEM",
          "CrowdStrike",
          "AWS Step Functions",
          "Device Fingerprinting",
          "Fraud Detection",
        ],
      },
      {
        title: "Graduate Software Engineer",
        workPeriod: "2024",
        description:
          "I rotated across the payments, security, and payroll teams, gaining hands-on experience in full-stack development, software architecture trade-offs, observability at scale, and how technical decisions are negotiated in large-scale production environments.\n\nOne highlight was extracting a core business monolith into microservices and running parallel tests of the old and new services, followed by a gradual rollout to avoid regressions for existing users.",
        skills: [
          "C#/.NET",
          "React",
          "SQL",
          "Microservices",
          "Parallel Testing",
          "Kubernetes",
        ],
      },
    ],
    companyImagePath: "/experience/xero_logo.png",
    skills: [
      "C#/.NET",
      "React",
      "Event-Driven Architecture",
      "AWS",
      "Idempotency & Retry Patterns",
      "Observability at Scale",
    ],
  },
  {
    id: "item2",
    buttonLabel: "Software Engineer @ JDoodle",
    workType: "Full-time",
    workPeriod: "May 2023 - Feb 2024",
    description:
      "JDoodle is an Australian seed-stage startup providing web-based compilers and coding solutions. Working in a fast-paced environment with a high degree of autonomy, I was responsible for translating ambiguous CEO and investor requirements into shipped production features.\n\nMy most significant contribution was spiking and implementing a full Strapi CMS integration. I designed both the frontend and backend data models, enabling the marketing team to manage all published content independently without developer involvement.\n\nI also led the Vue 2 to Vue 3 migration, delivered a new IDE feature, and drove a full frontend overhaul while maintaining production stability. I consistently applied best practices, including the Single Responsibility Principle and Component State Management, across a large enterprise-level codebase.",
    companyImagePath: "/experience/jdoodle_logo.png",
    skills: ["TypeScript", "Vue.js", "GraphQL", "Strapi Headless CMS"],
  },
  {
    id: "item3",
    buttonLabel: "Software Engineer Intern @ Xero",
    workType: "Full-time",
    workPeriod: "Nov 2022 - Feb 2023",
    description:
      "I worked in a backend team specialising in C#/.NET API development at Xero, one of Australia's largest ASX-listed software companies. I contributed to the full API development lifecycle, implementing features, writing unit tests, debugging, and configuring Docker containers. My work focused on Lambda functions, webhooks, and queues for scalable, reliable payment systems.\n\nOne of my most memorable contributions was authoring a comprehensive onboarding guide that was adopted by subsequent intern cohorts and reduced ramp-up time for new team members. I also gained hands-on experience with Agile delivery, Extreme Programming practices, and AWS infrastructure.",
    companyImagePath: "/experience/xero_logo.png",
    skills: ["C# / .NET", "AWS", "CI/CD (TeamCity)", "Git", "Docker"],
  },
  {
    id: "item4",
    buttonLabel: "Frontend Developer @ Pegboard Software",
    workPeriod: "Jul 2022 - Jun 2023",
    workType: "Part-time",
    description:
      "I developed custom web applications and CRMs for clients across various industries at a small software business. The role required autonomy, proactive decision-making, and clear communication with diverse stakeholders.\n\nMy most significant achievement was leading the end-to-end delivery of Quintrex's Build My Boat e-commerce app in Angular, introducing interactive 3D product visualisation as a new capability. I drove the full project lifecycle, from feasibility investigation and technology selection (Vectary) through implementation and requirements coordination with an external 3D modeller.\n\nI also developed single-page applications and CRM interfaces in Angular and TypeScript, and maintained clear technical documentation throughout.",
    companyImagePath: "/experience/pegboardco_logo.png",
    skills: ["TypeScript/JavaScript", "Angular", "Vectary", "HTML/CSS"],
  },
  {
    id: "item5",
    buttonLabel: "Web Designer and Developer @ Bernies Music Land",
    workType: "Casual",
    workPeriod: "May 2022 - Feb 2023",
    description:
      "I was responsible for maintaining, debugging, and developing multiple legacy websites for a piano distribution business, working with custom code and WordPress WooCommerce.\n\nMy greatest achievement was producing the initial design and high-fidelity prototype for the new website. I balanced complex UX requirements with business needs and delivered a design the client could clearly understand and engage with. This experience strengthened my ability to translate non-technical business requirements into practical, user-centred digital solutions.",
    companyImagePath: "/experience/bml_logo.jpg",
    skills: ["HTML", "CSS", "PHP", "SQL"],
  },
  {
    id: "item6",
    buttonLabel: "Paediatric Music Therapist @ Various Melbourne clinics",
    workType: "Full-time",
    workPeriod: "May 2020 - Jan 2023",
    description:
      "As a Paediatric Music Therapist, I designed and delivered therapy programmes for children and adolescents, supporting speech, school readiness, and social skill development across various Melbourne clinics.\n\nI collaborated closely with families to set goals, manage expectations, and communicate outcomes. This developed my ability to tailor complex specialist information for non-specialist audiences. I also maintained confidential documentation and consulted with multidisciplinary teams to ensure coordinated care.\n\nThis experience shaped how I approach software engineering today: with empathy for end users, clear communication with technical and non-technical stakeholders, and a structured, goal-oriented approach to problem-solving.",
    companyImagePath: "/experience/amta_logo.png",
    skills: [
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
