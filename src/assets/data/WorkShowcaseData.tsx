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
    id: "buildmyboat",
    name: "3D Boat Builder (E-commerce application)",
    clientName: "Quintrex",
    descShort:
      "A Single Page Application (SPA) that enables potential customers to customise a boat and preview changes as a 3D-model. When sharing the URL with others, the user's customisation will be automatically be rendered.",
    isFeatured: false,
    category: "software",
    descLong: "",
    projectThumbnailPath: "/myWork/bmb_colour_customisation.jpg",
    titleImagePath: "/myWork/bmb_colour_customisation.jpg",
    projectGallery: [
      {
        imagePath: "/myWork/bmb_colour_customisation.jpg",
        imageDescription:
          "Example of customising the colour of the boat render",
      },
      {
        imagePath: "/myWork/bmb_colour_customisation_mobile.jpg",
        imageDescription: "Example of mobile responsiveness",
      },
    ],
    features: [
      "Interactive 3D Boat Models (colours, wraps, accessories)",
      "URL Variables stores customisation data - renders selection when URL is shared with others",
      "Captures selection data in form format for company/dealers at final step",
      "SPA with step-by-step selection panels and a progress bar",
      "Exciting and engaging retail tool to prompt user interest",
    ],
    videoLink: "",
    projectUrl: "https://build.quintrex.com.au/build",
    technologies: ["Angular", "TypeScript", "SCSS", "Vectary", "Azure"],
    designPrinciples: ["Dependency Injection", " Don't Repeat Yourself (DRY)"],
  },

  {
    id: "programming_ide_app",
    name: "Programming challenge app - with IDE, online compiler and test cases",
    clientName: "Personal Project",
    isFeatured: true,
    category: "software",
    descShort:
      "An application that tests users' coding skills, by using a code compiler API (JDoodle). Users can type their code directly into the web interface, and run test cases. The final result is generated by running the code against pre-determined test cases. This sample application was my interview project prior to joining JDoodle.",
    descLong: "",
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
];

export default WorkShowcaseData;
