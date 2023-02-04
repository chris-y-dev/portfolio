import React from "react";
import MyWorkData from "../../interfaces/MyWorkData";
import "./MyWork.scss";

const ProjectBlock = (props: { projectData: MyWorkData }) => {
  return (
    <div className="projectBlock">
      <img
        src={props.projectData.projectThumbnailPath}
        alt={props.projectData.projectName}
      />
      <div className="projectBlock_panel">{props.projectData.projectName}</div>
    </div>
  );
};

export default ProjectBlock;
