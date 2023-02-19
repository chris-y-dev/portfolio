import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import fetchStaticImage from "../../hooks/fetchStaticImage";
import MyWorkData from "../../interfaces/MyWorkData";
import "./MyWork.scss";
// import "../../App.scss";

const ProjectBlock = (props: { projectData: MyWorkData }) => {
  const img = fetchStaticImage(props.projectData.projectThumbnailPath);

  return (
    <div className="projectBlock d-flex flex-column">
      <a href={"/work-showcase/" + props.projectData.id}>
        <img src={img} alt={props.projectData.name} />

        <div className="projectBlock_panel d-flex flex-row justify-content-between align-items-center px-3 py-2">
          <div className="projectBlock_name">{props.projectData.name}</div>
          <FontAwesomeIcon
            icon={faArrowAltCircleRight}
            size="lg"
            className="projectBlock_arrow"
          />
        </div>
      </a>
    </div>
  );
};

export default ProjectBlock;
