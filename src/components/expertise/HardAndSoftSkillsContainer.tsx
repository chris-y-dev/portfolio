import React from "react";
import HardAndSoftSkillData from "../../interfaces/HardAndSoftSkillData";
import SkillPill from "./SkillPill";

const HardAndSoftSkillsContainer = (props: {
  skillData: HardAndSoftSkillData;
}) => {
  const skillType_styling: { [key: string]: any } = {
    Expert: "--expert",
    Proficient: "--proficient",
    Intermediate: "--intermediate",
    "Soft Skill Highlights": "--softSkills",
  };

  return (
    <div
      className={`skillContainer py-3 px-4 ${
        skillType_styling[props.skillData.proficiencyTitle]
      }`}
    >
      <h3 className="heading mb-4">{props.skillData.proficiencyTitle}</h3>
      <div className="d-flex flex-row text-center flex-wrap">
        {props.skillData.technolgies.map((pill) => {
          return <SkillPill pill={pill} />;
        })}
      </div>
    </div>
  );
};

export default HardAndSoftSkillsContainer;
