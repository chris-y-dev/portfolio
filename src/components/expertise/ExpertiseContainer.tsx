import React from "react";
import ExpertiseData from "../../interfaces/ExpertiseData";

const ExpertiseContainer = (props: { data: ExpertiseData }) => {
  return (
    <div className="expertiseContainer p-3">
      <h3 className="mb-4 mt-2">{props.data.expertiseTitle}</h3>
      <p>{props.data.description}</p>
    </div>
  );
};

export default ExpertiseContainer;
