import React, { useEffect, useState } from "react";
import ExpertiseData from "../../interfaces/ExpertiseData";
import HardAndSoftSkillData from "../../interfaces/HardAndSoftSkillData";
import TechnologiesData from "../../interfaces/HardAndSoftSkillData";
import "./Expertise.scss";
import ExpertiseContainer from "./ExpertiseContainer";
import HardAndSoftSkillsContainer from "./HardAndSoftSkillsContainer";

const Expertise = () => {
  const [expertiseData, setExpertiseData] = useState<ExpertiseData[]>([]);

  const eData: ExpertiseData[] = [
    {
      expertiseTitle: "Software Dev",
      description:
        "Experience with enterprise-level technologies such as WebAPIs and AWS. Familiar with SOLID principles and CLEAN architecture, particularly the use of Depency Injection.",
    },
    {
      expertiseTitle: "Frontend Dev",
      description:
        "2 years of development experience in HTML, CSS, JS, React, and Angular frameworks.",
    },
    {
      expertiseTitle: "Web Design",
      description:
        "Passionate about designing modern websites for small businesses, informed by UX/UI principles.",
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
    <div className="border-blue py-5">
      <div className="container">
        <h2 className="section-heading">EXPERTISE</h2>

        {/* High level skills */}
        <div className="inner-container text-center border-red">
          <div className="row h-20">
            {expertiseData.map((data) => {
              return (
                <div className="col-lg-4 col-md-6 col-sm-12 p-0">
                  <ExpertiseContainer data={data} />
                </div>
              );
            })}
          </div>
        </div>

        {/* Tiered Skills */}
        <div className="inner-container text-center border-red">
          <div className="row gy-4">
            {hardAndSoftSkillData.map((skillData) => {
              return (
                <div className="col-md-6 col-sm-12 border-green">
                  <HardAndSoftSkillsContainer skillData={skillData} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
