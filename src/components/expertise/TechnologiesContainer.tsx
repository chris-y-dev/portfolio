import React from "react";
import TechPill from "./TechPill";

const TechnologiesContainer = () => {
  const pills = ["C#", "Dotnet", "TypeScript", "JavaScript"];

  return (
    <div className="skillContainer p-3">
      <h4 className="heading">Skill Container</h4>
      <div className="d-flex flex-row text-center flex-wrap">
        {pills.map((pill) => {
          return <TechPill pill={pill} />;
        })}
      </div>
    </div>
  );
};

export default TechnologiesContainer;
