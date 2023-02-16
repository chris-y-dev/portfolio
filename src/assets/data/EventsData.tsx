import EventData from "../../interfaces/EventData";

const eventData: EventData[] = [
  {
    title: "Hackathon 1st Place - HackMelbourne",
    date: "July 2022",
    link: "https://devpost.com/software/ed-journey",
    eventType: {
      type: "Hackathon",
      isWinner: true,
      place: 1,
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
    },
  },
  {
    title: "Microsoft Azure Fundamentals AZ-900",
    date: "Sept 2022",
    link: "https://www.credly.com/badges/c2216284-c359-4bd2-92c9-afc9cd45c164/linked_in?t=rhrj17",
    eventType: {
      type: "Certification",
      isWinner: false,
      place: 0,
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
    },
  },
];

export default eventData;
