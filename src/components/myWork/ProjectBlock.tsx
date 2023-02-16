import React, { useEffect, useState } from "react";
import fetchStaticImage from "../../hooks/fetchStaticImage";
import MyWorkData from "../../interfaces/MyWorkData";
import "./MyWork.scss";

const ProjectBlock = (props: { projectData: MyWorkData }) => {
  const img = fetchStaticImage(props.projectData.projectThumbnailPath);

  return (
    <div className="projectBlock d-flex flex-column">
      <a href={"/work-showcase/" + props.projectData.id}>
        <img src={img} alt={props.projectData.name} />

        <div className="projectBlock_panel pt-3">{props.projectData.name}</div>
      </a>
    </div>
  );
};

export default ProjectBlock;
