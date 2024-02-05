import IAchievementsAndEvents from "../../interfaces/IAchievementsAndEvents";

const AchievementsAndEventsData: IAchievementsAndEvents[] = [
  {
    title: "Hackathon 1st Place - HackMelbourne",
    date: "July 2022",
    link: "https://devpost.com/software/ed-journey",
    eventType: {
      type: "Hackathon",
      isWinner: true,
      place: 1,
      companyColour: "",
      hasIconColour: false,
    },
  },
  {
    title: "Hackathon 2nd Place - HackMelbourne Hackiethon",
    date: "Sept 2022",
    link: undefined,
    eventType: {
      type: "Hackathon",
      isWinner: true,
      place: 2,
      companyColour: "",
      hasIconColour: false,
    },
  },
  {
    title: "Microsoft Azure Fundamentals AZ-900",
    date: "Sept 2022",
    link: "https://www.credly.com/badges/c2216284-c359-4bd2-92c9-afc9cd45c164/linked_in?t=rhrj17",
    eventType: {
      type: "Cloud",
      isWinner: false,
      place: 0,
      companyColour: "Microsoft",
      hasIconColour: false,
    },
  },
  {
    title: "IntegraDev Work Experience Day (Hackathon Winners)",
    date: "July 2022",
    link: undefined,
    eventType: {
      type: "Event",
      isWinner: false,
      place: 0,
      companyColour: "",
      hasIconColour: false,
    },
  },
  {
    title: "RedMarble.AI Work Experience Day (Hackathon Winners)",
    date: "July 2022",
    link: undefined,
    eventType: {
      type: "Event",
      isWinner: false,
      place: 0,
      companyColour: "",
      hasIconColour: false,
    },
  },
  {
    title:
      "Masters of IT (Software Engineering specialisation) - Swinburne University of Technology",
    date: "Feb 2022 ~ Oct 2023",
    link: undefined,
    eventType: {
      type: "Education",
      isWinner: false,
      place: 0,
      companyColour: "",
      hasIconColour: true,
    },
  },
  {
    title: "Masters of Music Therapy - The University of Melbourne",
    date: "2018 - 2019",
    link: undefined,
    eventType: {
      type: "Education",
      isWinner: false,
      place: 0,
      companyColour: "",
      hasIconColour: false,
    },
  },
  {
    title:
      "Bachelor of Music (Classical Piano Major) - The University of Melbourne",
    date: "2014 - 2017",
    link: undefined,
    eventType: {
      type: "Education",
      isWinner: false,
      place: 0,
      companyColour: "",
      hasIconColour: false,
    },
  },
];

export default AchievementsAndEventsData;
