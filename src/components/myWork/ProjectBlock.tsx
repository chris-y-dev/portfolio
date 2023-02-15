import React, { useEffect, useState } from "react";
import fetchStaticImage from "../../hooks/fetchStaticImage";
import MyWorkData from "../../interfaces/MyWorkData";
import "./MyWork.scss";

const ProjectBlock = (props: { projectData: MyWorkData }) => {
  const img = fetchStaticImage(props.projectData.projectThumbnailPath);

  return (
    <div className="projectBlock d-flex flex-column">
      <a href={"/work-showcase/" + props.projectData.projectId}>
        <img src={img} alt={props.projectData.projectName} />

        <div className="projectBlock_panel pt-3">
          {props.projectData.projectName}
        </div>
      </a>
    </div>
  );
};

export default ProjectBlock;
