import IHardAndSoftSkill from "../../interfaces/IHardAndSoftSkill";

const HardAndSoftSkillsData: IHardAndSoftSkill[] = [
  {
    proficiencyTitle: "Day-to-day",
    class: "gold",
    technolgies: [
      "C# / .NET",
      "JavaScript/TypeScript (React)",
      "HTML/CSS",
      "AWS",
      "Docker",
      "AI Tools (copilot, MCP)",
      "SumoLogic",
      "CICD - Teamcity/GHA",
    ],
  },
  {
    proficiencyTitle: "Occasional",
    class: "silver",
    technolgies: ["SQL", "Python", "Angular", "Vue3"],
  },
  // {
  //   proficiencyTitle: "Intermediate",
  //   technolgies: ["Kotlin", "Python", "Networking", "ReactNative"],
  // },
  {
    proficiencyTitle: "Soft Skill Highlights",
    technolgies: [
      "Clear Communicator",
      "Ownership / Accountability",
      "Empathetic & Respectful",
      "Quick & Keen Learner",
      "Feedback-seeking",
    ],
  },
];

export default HardAndSoftSkillsData;
