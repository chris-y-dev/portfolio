import React from "react";
import fetchStaticImage from "../../hooks/fetchStaticImage";
import ExpertiseData from "../../interfaces/ExpertiseData";

const ExpertiseContainer = (props: { data: ExpertiseData }) => {
  var icon = fetchStaticImage(props.data.graphicPath);

  return (
    <div className="expertiseContainer py-2 px-3 d-flex flex-column align-items-center">
      <h3 className="mb-4 mt-2">{props.data.expertiseTitle}</h3>
      <img src={icon} alt={props.data.expertiseTitle} className="mt-2 mb-4" />
      <p>{props.data.description}</p>
    </div>
  );
};

export default ExpertiseContainer;
