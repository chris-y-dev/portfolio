import IWorkData from "../../interfaces/IWorkData";

const WorkShowcaseData: IWorkData[] = [
  {
    id: "api_lambda_s3",
    name: "Auto Image Processing with Dotnet, AWS S3, Lambda",
    clientName: "Personal Project",
    isFeatured: true,
    category: "software",
    descShort:
      "A containerised application that generates an uploaded image into 4 different sized thumbnails (small, medium, large, xlarge). Invovles a locally hosted Dotnet API, S3 Bucket, and Lambda Function.",
    descLong: "This is the long desc.",
    projectThumbnailPath: "/myWork/thumbnailapi_program_workflow.jpg",
    titleImagePath: "/myWork/thumbnailapi_program_workflow.jpg",
    projectGallery: [
      {
        imagePath: "/myWork/thumbnailapi_documentation.jpg",
        imageDescription:
          "Clear Documentation - Try running the application on your computer",
      },
      {
        imagePath: "/myWork/thumbnailapi_swagger.jpg",
        imageDescription: "API Swagger - Upload your image here",
      },
      {
        imagePath: "/myWork/thumbnailapi_output.jpg",
        imageDescription:
          "Lambda Function will process your image and upload the re-sized thumbnails to the 'output' bucket, which you can download",
      },
    ],
    features: [
      "Containerised environment using Docker",
      "Localstack to emulate AWS",
      "Dotnet API validates file and uploads to AWS (localstack)",
      "Lambda Function written in TypeScript",
      "Script that creates S3 buckets, Lambda Function, IAM Policy, IAM Role, and Notification configuration that sets Lambda trigger",
    ],
    videoLink: "",
    projectUrl: "https://github.com/chris-y-dev/image_lambda_processing",
    technologies: [
      "C#",
      "Dotnet",
      "TypeScript",
      "Docker",
      "AWS",
      "S3",
      "Lambda Function",
    ],
    designPrinciples: [
      "CLEAN Architecture",
      "Dependency Injection",
      "Clear Documentation",
    ],
  },

  {
    id: "edjourney",
    name: "Edu-Tech Platform - EdJourney (Hackathon Project)",
    clientName: "Hackathon Project",
    descShort:
      "EdJourney is an online platform where students can share a topic (also called a Journey) and learn form Journeys shared by others. Each Journey will have step-by-step milestones that guides users to achieve a learning outcome. Users can also mark their learning progress with the progress bar feature.",
    isFeatured: false,
    category: "software",
    descLong: "This is the long desc.",
    projectThumbnailPath: "/myWork/edjourney_home.jpg",
    titleImagePath: "/myWork/edjourney_home_2.jpg",
    projectGallery: [
      {
        imagePath: "/myWork/edjourney_form.jpg",
        imageDescription: "Dynamic form to create milestones in a journey",
      },
      {
        imagePath: "/myWork/edjourney_progress.jpg",
        imageDescription:
          "Progress bar visualising progress and milestones to help users plan their learning",
      },
      {
        imagePath: "/myWork/edjourney_login.jpg",
        imageDescription:
          "User login and authentication feature to create/save Journeys",
      },
    ],
    features: [
      "User login and authentication",
      "Search uploaded Learning Journeys",
      "Create a new learning topic by using the dynamic input-form to add any amount of steps/milestones",
      "Save learning progress to database",
      "Dynamic progress bar to visualise learning progress",
    ],
    videoLink: "",
    projectUrl: "https://devpost.com/software/ed-journey",
    technologies: ["React.js", "MongoDB", "Express.js", "Node.js", "Chakra-UI"],
    designPrinciples: [
      "Must-haves VS Nice-to-haves management",
      "Task prioritisation (time constraints)",
    ],
  },

  {
    id: "portfolio",
    name: "My Software Engineering Portfolio",
    clientName: "Personal Project",
    isFeatured: false,
    category: "software",
    descShort:
      "Developed my personal portfolio from scratch using React.js. This portfolio aims to showcase my experiences and skills in a modern and engaging way.",
    descLong: "This is the long desc.",
    projectThumbnailPath: "/myWork/portfolio_thumbnail.jpg",
    titleImagePath: "/myWork/portfolio_thumbnail.jpg",
    projectGallery: [
      {
        imageDescription:
          "Custom client-side sorting algorithm that orders project by filter category",
        imagePath: "/myWork/portfolio_projects.jpg",
      },
      {
        imageDescription: "Fully responsive layout for all devices",
        imagePath: "/myWork/portfolio_responsive_example.jpg",
      },
      {
        imageDescription: "Modern entry & hover animations across website",
        imagePath: "/myWork/portfolio_animations_example.jpg",
      },
    ],
    features: [
      "Fully responsive site for all devices",
      "Custom sorting algorithm to sort project ordering (featued -> software -> mobile -> web)",
      "Filterable Work/Projects",
      "Intentional UI design and layout to maximise readability",
      "Engaging design elements (animations, transitions) using CSS/JS techniques",
      "Non-static data allows easy maintenance of content",
    ],
    videoLink: "",
    projectUrl: "/",
    technologies: ["TypeScript", "React", "SCSS"],
    designPrinciples: [
      "DRY (Don't Repeat Yourself)",
      "Reusable Hooks",
      "Mobile-first Development",
    ],
  },

  {
    id: "programming_ide_app",
    name: "Programming test app with IDE and online compiler",
    clientName: "Personal Project",
    isFeatured: true,
    category: "software",
    descShort:
      "A application that tests users' coding skills, by using a code compiler API (JDoodle). Users can type their code directly into the web interface, and run test cases. The final result is generated by running the code against pre-determined test cases.",
    descLong: "This is the long desc.",
    projectThumbnailPath: "/myWork/programming_ide_question_thumbnail.jpg",
    titleImagePath: "/myWork/programming_ide_question.jpg",
    projectGallery: [
      {
        imagePath: "/myWork/programming_ide_languages.jpg",
        imageDescription:
          "Choice of different languages (Only NodeJS/Javascript available at this stage)",
      },
      {
        imagePath: "/myWork/programming_ide_topics.jpg",
        imageDescription:
          "Choice of different topics within a language. Each topic has a different bank of questions.",
      },
      {
        imagePath: "/myWork/programming_ide_question.jpg",
        imageDescription:
          "Usable interface with pre-filled functions in the IDE. Code typed into the IDE will be compiled and tested against.",
      },
      {
        imagePath: "/myWork/programming_ide_results.jpg",
        imageDescription:
          "Final results page showing 5 test cases for each of the 5 questions",
      },
    ],
    features: [
      "Express backend for API calls",
      "JDoodle API compiles and executes code scripts",
      "Pre-determined test cases for each question",
      "Timed mode disables user input on times up",
    ],
    videoLink: "",
    projectUrl: "https://github.com/chris-y-dev/programming-test-app",
    technologies: ["Angular", "TypeScript", "Express", "API"],
    designPrinciples: [
      "Singled Paged Application (SPA)",
      "Dependency Injection",
      "Separation of Concerns",
      "Clear Documentation",
    ],
  },

  {
    id: "MyMozartExperience",
    name: "Music-Themed E-commerce Web Design - MyMozartExperience",
    clientName: "My Mozart Experience",
    isFeatured: false,
    descShort:
      "Modern, responsive web design for a small e-commerce business. No-code development.",
    descLong:
      "Web design for my small music-themed entrepreneurial project. The purpose of the site was to showcase products and digital-art designs to potential customers. The goal was to guide users to interact with the website, view images and read more about our products. Community-building elements were also implemented - the Community Gallery and Downloads sections.",
    projectThumbnailPath: "/myWork/mme_thumbnail_2.jpg",
    titleImagePath: "/myWork/mme_thumbnail.jpg",
    projectGallery: [
      {
        imagePath: "/myWork/mme_gallery_1.jpg",
        imageDescription:
          "Home Page - Vibrant, easy-to-understand sections to prompt action.",
      },
      {
        imagePath: "/myWork/mme_gallery_2.jpg",
        imageDescription: "Community Gallery - .",
      },
      {
        imagePath: "/myWork/mme_gallery_3.jpg",
        imageDescription:
          "Shop - Actionable buttons and visually consistent products.",
      },
      {
        imagePath: "/myWork/mme_gallery_4.jpg",
        imageDescription:
          "About Page - Stragetic placement of images and text to support reading and interest.",
      },
      {
        imagePath: "/myWork/mme_gallery_5.jpg",
        imageDescription:
          "Footer - Strategic link choices and placement, use of recognisable image.",
      },
    ],
    category: "web",
    features: [
      "Attractive elements (images/backgrounds/icons) that sets visual hierarchy",
      "Strategic placement and design to gradually disclose information and guide user across site",
      "Clear CTA (call-to-action) across all pages",
      "Community-building features including Community Gallery and Downloads",
      "Consistent brand identity using vibrant and fun design imagery",
    ],
    videoLink: "",
    projectUrl: "http://www.mymozartexperience.com",
    technologies: ["CSS", "Adobe Photoshop"],
    designPrinciples: [
      "Visual Hierarchy to guide experience",
      "Storytelling Design (Imagery & Text)",
      "Showcase Personality",
      "Consistent & Purposeful Call-to-action",
    ],
  },
  {
    id: "bilingual-music-therapy-website",
    name: "Bilingual Website Script & Design - MBMT",
    clientName: "Bilingual Music Therapy Services",
    isFeatured: false,
    category: "web",
    descShort:
      "Responsive web design (no-code) for a bilinguak Therapy business according to client requirements and requests, while considering UX concepts.  *Note: Client has made their own changes since the initial design.",
    descLong:
      "Provided the initial responsive web design (no-code) according to client requirements and requests, while considering UX concepts.  \nOne key intention was .  ",
    projectThumbnailPath: "/myWork/bmt_home.jpg",
    titleImagePath: "/myWork/bmt_home.jpg",
    projectGallery: [
      {
        imagePath: "/myWork/bmt_info_cn.jpg",
        imageDescription: "Example of the 'Services' page with Chinese content",
      },
      {
        imagePath: "/myWork/bmt_info.jpg",
        imageDescription:
          "Use of different design elements & layouts to communicate information clearly with a modern style",
      },
      {
        imagePath: "/myWork/bmt_sections.jpg",
        imageDescription:
          "Different sections with clear CTA (call-to-action) that guides user's eyes around (dummy pictures use to protect real clients)",
      },
    ],
    features: [
      "SquareSpace development and training (No Code) enables client to maintain and edit after the inital design",
      "Clear Call-To-Action to help users achieve goals",
      "Emphasis on simplicity as primary users are adults/older adults who may not be tech-savvy",
      "Script that manipulates the navigation to be multi-lingual (English or Chinese)",
      "Colour scheme was chosen for clarity of content, and to give off a professional and refreshing impression. ",
      "Strategic layout that guides eyes across website and maximise engagement",
    ],
    videoLink: "",
    projectUrl: "http://www.bilingualmusictherapy.com.au",
    technologies: ["JavaScript", "CSS", "SquareSpace"],
    designPrinciples: [
      "Simple & Intuitive Use",
      "Progressive Disclosure",
      "Less is More",
      "Focus on Users (Parents/Older Adults)",
    ],
  },

  {
    id: "buildmyboat",
    name: "COMING SOON - 3D Boat Model E-Commerce App",
    clientName: "Telwater Pty Ltd",
    descShort:
      "COMING SOON - A SPA (single-page-app) that enables potential customers to customise their own boat and preview changes as a 3D-model. When sharing the URL with others, the user's selected customisation will also be rendered.",
    isFeatured: false,
    category: "software",
    descLong: "This is the long desc.",
    projectThumbnailPath: "/myWork/coming-soon_thumbnail.jpg",
    titleImagePath: "/myWork/coming-soon.jpg",
    projectGallery: [],
    features: [
      "Interactive 3D Boat Models (colours, wraps, accessories)",
      "URL Variables stores customisation data - renders selection when URL is shared with others",
      "Captures selection data in form format for company/dealers at final step",
      "SPA with step-by-step selection panels and a progress bar",
      "Exciting and engaging retail tool to prompt user interest",
    ],
    videoLink: "",
    projectUrl: "",
    technologies: ["Angular", "TypeScript", "SCSS", "Vectary", "Azure"],
    designPrinciples: ["Dependency Injection", " Don't Repeat Yourself (DRY)"],
  },
  {
    id: "discountAndCurrency",
    name: "Mobile Currency & Discount Calculator",
    clientName: "Personal Project",
    descShort:
      "Developed upon mum's request. This mobile app (deployed on GooglePlay Store) calls a Currency API and converts the amount provided by the user. There is also a discount calculator feature which calculates discounted prices to help users when shopping (eg 15% off $99 = $84.15).",
    isFeatured: false,
    category: "mobile",
    descLong: "This is the long desc.",
    projectThumbnailPath: "/myWork/currencyDiscountCalc_convert_screen.jpg",
    titleImagePath: "/myWork/currencyDiscountCalc_home_screen.jpg",
    projectGallery: [
      {
        imagePath: "/myWork/currencyDiscountCalc_home_screen.jpg",
        imageDescription: "Landing page with navigation buttons",
      },
      {
        imagePath: "/myWork/currencyDiscountCalc_convert_screen.jpg",
        imageDescription:
          "Currency Converter screen to select desired currencies and input amount",
      },
      {
        imagePath: "/myWork/currencyDiscountCalc_discount_screen.jpg",
        imageDescription:
          "Discount Calculator screen with a simple UI to input discount and price",
      },
    ],
    features: [
      "Deployed to Play Store for Android users",
      "Real-time currency API to provide accurate conversion",
      "v2.0 has been converted to TypeScript for easier maintenance and feature adding",
      "NEXT UPDATE: Will implement Currency searching instead of limited currencies",
      "Clear navigation and UI to maximise ease of use",
    ],
    videoLink: "",
    projectUrl:
      "https://play.google.com/store/apps/details?id=com.chrisydev.currencyAndPriceCalculator&pli=1",
    technologies: ["React Native", "TypeScript", "Expo", "Encryption"],
    designPrinciples: ["KISS"],
  },
];

export default WorkShowcaseData;
