import React from "react";
import ExpertiseData from "../../interfaces/ExpertiseData";

const ExpertiseContainer = (props: { data: ExpertiseData }) => {
  return (
    <div className="expertiseContainer p-3">
      <h4>{props.data.expertiseTitle}</h4>
      <p>{props.data.description}</p>
    </div>
  );
};

export default ExpertiseContainer;
