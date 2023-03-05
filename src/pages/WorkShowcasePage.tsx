import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ProjectFilterCategoriesData from "../assets/data/ProjectFilterCategoriesData";
import "../App.scss";
import Header from "../components/header/Header";
import { IProjectFilterCategory } from "../interfaces/IProjectFilterCategory";
import fetchStaticImage from "../hooks/fetchStaticImage";
import VisitProjectButton from "../components/workShowcasePage/visitProjectButton/VisitProjectButton";
import SkillPill from "../components/expertise/SkillPill";
import "./WorkShowcasePage.scss";
import "../App.scss";
import "../components/workShowcasePage/visitProjectButton/VisitProjectButton.scss";
import IWorkData from "../interfaces/IWorkData";
import WorkShowcaseData from "../assets/data/WorkShowcaseData";

const WorkShowcasePage = () => {
  const [projectData, setProjectData] = useState<IWorkData | undefined>();
  const [projectCategory, setProjectCategory] =
    useState<IProjectFilterCategory>();
  const location = useLocation();

  function getProjectId(): string | undefined {
    console.log(location.pathname);

    return location.pathname.split("/").pop();
  }

  function getProjectData(projectId: string | undefined) {
    if (projectId) {
      setProjectData(
        WorkShowcaseData.find((project) => project.id === projectId)
      );

      setProjectCategory(
        ProjectFilterCategoriesData.find(
          (category) => projectData?.category === category.categoryId
        )
      );
    } else {
      setProjectData(undefined);
    }
  }

  useEffect(() => {
    getProjectData(getProjectId());

    console.log(projectData?.projectThumbnailPath);
    console.log(projectCategory);
  }, [projectData]);

  if (projectData === null) {
    return <div>Project not found</div>;
  } else {
    return (
      <div className="workShowcasePage">
        <Header />
        <div className="container py-5">
          {/* Title Section */}

          <h5 className="work-category mb-5">
            {projectCategory?.categoryName}
          </h5>
          <h1 className="mt-4 mb-5">{projectData?.name}</h1>

          <div className="row mb-5">
            <div className="border-red col-md-8 col-sm-12 order-md-1 order-2">
              <p>{projectData?.descShort}</p>
            </div>
            <div className="border-red col-md-4 col-sm-12 client_container order-md-2 order-1">
              <h5 className="mb-2">Client</h5>
              <p className="">{projectData?.clientName}</p>
            </div>
          </div>

          <div className="image_and_button_container d-flex flex-column flex-column-reverse">
            <a href={projectData?.projectUrl} className="title_image_link">
              <img
                src={fetchStaticImage(projectData?.titleImagePath)}
                alt={projectData?.name}
                className="my-3 title_image"
              ></img>
            </a>
            <VisitProjectButton projectUrl={projectData?.projectUrl} />
          </div>

          {/* Features */}
          <div className="my-5">
            <h2 className="mt-5 mb-4">Features</h2>
            <ul>
              {projectData?.features.map((feature) => {
                return <li className="my-3">{feature}</li>;
              })}
            </ul>
          </div>

          {/* Tech and Principles */}
          <div className="">
            <div className="row gx-2 gy-3">
              <div className="border-red col-md-6 col-sm-12">
                <div className=" pill_container p-3">
                  <h4 className="mb-4">Technologies</h4>
                  <div className="d-flex flex-row flex-wrap">
                    {projectData?.technologies.map((technology) => (
                      <SkillPill pill={technology} key={technology} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="border-red col-md-6 col-sm-12">
                <div className=" pill_container p-3">
                  <h4 className="mb-4">Dev Strategies</h4>
                  <div className="d-flex flex-row flex-wrap">
                    {projectData?.designPrinciples.map((technology) => (
                      <SkillPill pill={technology} key={technology} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Gallery */}
          {projectData?.projectGallery.length! > 0 ? (
            <div className="project_gallery">
              <h2 className="mt-5 mb-3">Gallery</h2>
              {projectData?.projectGallery.map((image) => (
                <div
                  className="gallery-image_container"
                  key={image.imageDescription}
                >
                  <img
                    src={fetchStaticImage(image.imagePath)}
                    alt={image.imageDescription}
                    className="mt-5 mb-3"
                  />
                  <p className="mb-5">{image.imageDescription}</p>
                </div>
              ))}
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    );
  }
};

export default WorkShowcasePage;
