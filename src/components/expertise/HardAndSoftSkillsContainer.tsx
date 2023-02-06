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
      className={`skillContainer p-3 ${
        skillType_styling[props.skillData.proficiencyTitle]
      }`}
    >
      <h4 className="heading">{props.skillData.proficiencyTitle}</h4>
      <div className="d-flex flex-row text-center flex-wrap">
        {props.skillData.technolgies.map((pill) => {
          return <SkillPill pill={pill} />;
        })}
      </div>
    </div>
  );
};

export default HardAndSoftSkillsContainer;
