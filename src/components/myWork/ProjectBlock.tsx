import React, { useEffect, useState } from "react";
import fetchStaticImage from "../../hooks/fetchStaticImage";
import MyWorkData from "../../interfaces/MyWorkData";
import "./MyWork.scss";

const ProjectBlock = (props: { projectData: MyWorkData }) => {
  const img = fetchStaticImage(props.projectData.projectThumbnailPath);

  return (
    <div className="projectBlock d-flex flex-column">
      <img src={img} alt={props.projectData.projectName} />

      <div className="projectBlock_panel p-2">
        {props.projectData.projectName}
      </div>
    </div>
  );
};

export default ProjectBlock;
