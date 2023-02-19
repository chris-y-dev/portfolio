import React, { useEffect, useState } from "react";
import ExpertiseData from "../../interfaces/ExpertiseData";
import HardAndSoftSkillData from "../../interfaces/HardAndSoftSkillData";
import TechnologiesData from "../../interfaces/HardAndSoftSkillData";
import "./Expertise.scss";
import ExpertiseContainer from "./ExpertiseContainer";
import HardAndSoftSkillsContainer from "./HardAndSoftSkillsContainer";
import "../../App.scss";
import { motion } from "framer-motion";

const Expertise = () => {
  const [expertiseData, setExpertiseData] = useState<ExpertiseData[]>([]);

  const eData: ExpertiseData[] = [
    {
      expertiseTitle: "Software Dev",
      description:
        "Experience with enterprise-level technologies such as WebAPIs and AWS. Familiar with SOLID principles and CLEAN architecture, particularly the use of Depency Injection.",
      descriptionHighlight: undefined,
      graphicPath: "/expertise/software-development.png",
    },
    {
      expertiseTitle: "Frontend Dev",
      description:
        "2 years of development experience in HTML, CSS, JS, React, and Angular frameworks.",
      descriptionHighlight:
        "Meticulous about Responsiveness - Try on Mobile/Resize this site!",
      graphicPath: "/expertise/frontend-development.png",
    },
    {
      expertiseTitle: "Web Design",
      description:
        "Passionate about designing modern websites for small businesses, informed by UX/UI principles.",
      descriptionHighlight: undefined,
      graphicPath: "/expertise/web-design.png",
    },
  ];

  const hardAndSoftSkillData: HardAndSoftSkillData[] = [
    {
      proficiencyTitle: "Expert",
      technolgies: [
        "C#",
        "Dotnet",
        "API",
        "JavaScript",
        "TypeScript",
        "HTML",
        "CSS",
      ],
    },
    {
      proficiencyTitle: "Proficient",
      technolgies: [
        "Angular",
        "React",
        "SQL",
        "Docker",
        "SCSS",
        "Unit Testing",
      ],
    },
    {
      proficiencyTitle: "Intermediate",
      technolgies: ["AWS", "Azure", "ReactNative", "Express", "MongoDB"],
    },
    {
      proficiencyTitle: "Soft Skill Highlights",
      technolgies: [
        "Open & Assertive Communicator",
        "Empathetic & Respectful",
        "Open-minded",
        "Feedback-seeking",
        "Time Management",
        "Accountable",
        "Effective Collaborator",
      ],
    },
  ];

  useEffect(() => {
    setExpertiseData(eData);
  }, []);

  return (
    <div className="border-blue py-5 --section-margin-lg" id="expertise">
      <div className="container">
        <h2 className="section-heading">EXPERTISE</h2>

        {/* High level skills */}
        <div className="inner-container text-center border-red">
          <div className="row h-20 gx-2 gy-2">
            {expertiseData.map((data, i) => {
              return (
                <motion.div
                  className="col-lg-4 col-md-6 col-sm-12"
                  initial={{ y: "9rem" }}
                  whileInView={{ y: "0rem" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 + i * 0.1 }}
                >
                  <ExpertiseContainer data={data} />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Tiered Skills */}
        <div className="inner-container text-center border-red mt-4">
          <div className="row g-3">
            {hardAndSoftSkillData.map((skillData, i) => {
              return (
                <motion.div
                  className="col-md-6 col-sm-12 border-green"
                  initial={{ y: "9rem" }}
                  whileInView={{ y: "0rem" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 + i * 0.1 }}
                >
                  <HardAndSoftSkillsContainer skillData={skillData} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
