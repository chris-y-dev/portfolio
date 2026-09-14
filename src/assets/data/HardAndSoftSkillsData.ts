import IHardAndSoftSkill from "../../interfaces/IHardAndSoftSkill";

const HardAndSoftSkillsData: IHardAndSoftSkill[] = [
  {
    proficiencyTitle: "Core Stack",
    class: "gold",
    technolgies: [
      "C#/.NET",
      "TypeScript",
      "JavaScript",
      "React",
      "Vue 3",
      "Angular",
      "HTML / CSS",
      "SQL",
      "Python",
    ],
  },
  {
    proficiencyTitle: "Cloud & DevOps",
    class: "silver",
    technolgies: [
      "AWS",
      "Docker",
      "CI/CD",
      "GitHub Actions",
      "TeamCity",
      "SumoLogic",
      "Monitoring",
    ],
  },
  {
    proficiencyTitle: "Product & Design",
    class: "intermediate",
    technolgies: [
      "UX Thinking",
      "Responsive UI",
      "Figma",
      "Accessibility",
      "Web Design",
      "Design Systems",
    ],
  },
  {
    proficiencyTitle: "Soft Skills",
    class: "softSkills",
    technolgies: [
      "Clear Communication",
      "Ownership",
      "Empathy",
      "Fast Learning",
      "Feedback-Seeking",
      "Collaboration",
    ],
  },
];

export default HardAndSoftSkillsData;
