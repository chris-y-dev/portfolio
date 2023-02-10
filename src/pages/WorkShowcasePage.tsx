import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import workData from "../assets/data/WorkShowcaseData";
import MyWorkData from "../interfaces/MyWorkData";

const WorkShowcasePage = () => {

  const [projectData, setProjectData] = useState<MyWorkData | undefined>();
  const location = useLocation();

  function getProjectId(): string | undefined {
    console.log(location.pathname)

    return location.pathname.split("/").pop()
  }

  function getProjectData(projectId: string | undefined) {
    if (projectId) {
      setProjectData(workData.find((project) => project.projectId === projectId))
    } else {
      setProjectData(undefined);
    }
  }

  useEffect(() => {
    getProjectData(getProjectId());
  }, [])

  if(projectData===null){
    return (<div>Project not found</div>)
  } else {
    return (
      <div>Work Showcase: {projectData!.projectName}</div>
    )
  }
};

export default WorkShowcasePage;
