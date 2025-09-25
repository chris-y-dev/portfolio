import React from "react";
import HardAndSoftSkillData from "../../interfaces/IHardAndSoftSkill";
import SkillPill from "./SkillPill";

const HardAndSoftSkillsContainer = (props: {
  skillData: HardAndSoftSkillData;
}) => {
  const skillType_styling: { [key: string]: any } = {
    gold: "--gold",
    silver: "--silver",
    Intermediate: "--intermediate",
    softSkills: "--softSkills",
  };

  return (
    <div
      className={`skillContainer entrance py-3 px-4 ${
        skillType_styling[
          props.skillData.class ? props.skillData.class : "softSkills"
        ]
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
