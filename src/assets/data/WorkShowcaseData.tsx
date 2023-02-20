import MyWorkData from "../../interfaces/MyWorkData";

const workData: MyWorkData[] = [
  {
    id: "portfolio",
    name: "My Software Engineering Portfolio",
    clientName: "Personal Project",
    isFeatured: true,
    category: "software",
    descShort: "Developed my personal portfolio from scratch using React.js.",
    descLong: "This is the long desc.",
    projectThumbnailPath: "/myWork/portfolio_thumbnail.jpg",
    titleImagePath: "/myWork/mme_thumbnail_1.jpg",
    projectGallery: [],
    features: [
      "Fully responsive site for all devices",
      "Visual feedback implemented for all actionable content",
      "Intentional UI design and layout to maximise readability and user engagement",
      "Filterable Work/Projects",
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
    id: "thumbnailLambda",
    name: "Thumnail transforming Lambda Function - Coming Soon",
    clientName: "Personal Project",
    descShort:
      "A Lambda Function that resizes thumbnail images, triggered by uploading an image through an API.",
    isFeatured: false,
    category: "software",
    descLong: "This is the long desc.",
    projectThumbnailPath: "/myWork/static.gif",
    titleImagePath: "/myWork/mme_thumbnail_1.jpg",
    projectGallery: [],
    features: [
      "Hosted locally using Docker containers",
      "Localstack mimics real AWS Lambda and S3",
      "Validate uploaded file is in an acceptable format (jpg, png, svg)",
      "Lambda function automatically triggered after uploading image via API",
      "API accepts file upload",
      "Use of TypeScript to make Lambda Function code more readable and maintainable",
    ],
    videoLink: "",
    projectUrl: "",
    technologies: [
      "C#",
      "Dotnet",
      "Docker",
      "AWS",
      "Lambda Function",
      "S3 Bucket",
      "TypeScript",
    ],
    designPrinciples: [
      "CLEAN Architecture",
      "SOLID Principles",
      "Dependency Injection",
    ],
  },
  {
    id: "discountAndCurrency",
    name: "Mobile Currency Converter & Discount Calculator",
    clientName: "Personal Project",
    descShort:
      "Developed upon mum's request. This mobile app (on GooglePlay Store) calls a Currency Exchange API and converts any amount provided by user. There is also a discount calculator feature which that calculates post-discount prices when shopping (eg 15% off $99 = $84.15).",
    isFeatured: false,
    category: "mobile",
    descLong: "This is the long desc.",
    projectThumbnailPath: "/myWork/static.gif",
    titleImagePath: "/myWork/mme_thumbnail_1.jpg",
    projectGallery: [],
    features: [
      "Real-time currency prices enables accurate and updated converstion",
      "Various currencies available as requested by mum",
      "Deployed to Play Store for Android users",
      "Clear UI implemented to maximise ease of use",
    ],
    videoLink: "",
    projectUrl: "",
    technologies: ["React Native", "API"],
    designPrinciples: ["KISS"],
  },
];

export default workData;
