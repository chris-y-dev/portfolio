import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import workData from "../assets/data/WorkShowcaseData";
import MyWorkData from "../interfaces/MyWorkData";
import "../App.scss";
import Header from "../components/header/Header";

const WorkShowcasePage = () => {
  const [projectData, setProjectData] = useState<MyWorkData | undefined>();
  const location = useLocation();

  function getProjectId(): string | undefined {
    console.log(location.pathname);

    return location.pathname.split("/").pop();
  }

  function getProjectData(projectId: string | undefined) {
    if (projectId) {
      setProjectData(
        workData.find((project) => project.projectId === projectId)
      );
    } else {
      setProjectData(undefined);
    }
  }

  useEffect(() => {
    getProjectData(getProjectId());
  }, []);

  if (projectData === null) {
    return <div>Project not found</div>;
  } else {
    return (
      <div className="">
        <Header />
        <div className="container py-5">
          <h1>Work Showcase: {projectData?.projectName}</h1>
          <p>{projectData?.projectDescShort}</p>
          <img src={"/"} alt={projectData?.projectName}></img>
          <div>
            <h3>Product Features</h3>
            <ul>
              {projectData?.projectFeatures.map((feature) => {
                return <li>{feature}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
};

export default WorkShowcasePage;
