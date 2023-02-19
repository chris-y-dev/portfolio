import React from "react";
import "../../App.scss";
import fetchStaticImage from "../../hooks/fetchStaticImage";
import ExpertiseData from "../../interfaces/ExpertiseData";

const ExpertiseContainer = (props: { data: ExpertiseData }) => {
  var icon = fetchStaticImage(props.data.graphicPath);

  return (
    <div className="expertiseContainer d-flex flex-column align-items-center">
      <h3 className="mb-4 mt-2">{props.data.expertiseTitle}</h3>
      <img src={icon} alt={props.data.expertiseTitle} className="mt-2 mb-4" />
      <p>{props.data.description}</p>
      {props.data.descriptionHighlight !== undefined ? (
        <p className="--description-highlight">
          {props.data.descriptionHighlight}
        </p>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default ExpertiseContainer;
