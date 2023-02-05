import React from "react";
import MyWorkData from "../../interfaces/MyWorkData";
import ProjectBlock from "./ProjectBlock";

const MyWork = () => {
  const workData: MyWorkData[] = [
    {
      projectName: "Example",
      projectDescShort: "Example",
      projectDescLong: "This is the long desc.",
      projectThumbnailPath: "/myWork/sample_project.jpg",
      projectLink: "/",
      projectScreenshots: [],
      isFeatured: true,
      category: "software",
    },
    {
      projectName: "Example",
      projectDescShort: "Example",
      projectDescLong: "This is the long desc.",
      projectThumbnailPath: "/myWork/sample_project.jpg",
      projectLink: "/",
      projectScreenshots: [],
      isFeatured: false,
      category: "software",
    },
    {
      projectName: "Example",
      projectDescShort: "Example",
      projectDescLong: "This is the long desc.",
      projectThumbnailPath: "/myWork/sample_project.jpg",
      projectLink: "/",
      projectScreenshots: [],
      isFeatured: false,
      category: "web",
    },
    {
      projectName: "Example",
      projectDescShort: "Example",
      projectDescLong: "This is the long desc.",
      projectThumbnailPath: "/myWork/sample_project.jpg",
      projectLink: "/",
      projectScreenshots: [],
      isFeatured: false,
      category: "web",
    },
    {
      projectName: "Example",
      projectDescShort: "Example",
      projectDescLong: "This is the long desc.",
      projectThumbnailPath: "/myWork/sample_project.jpg",
      projectLink: "/",
      projectScreenshots: [],
      isFeatured: false,
      category: "web",
    },
    {
      projectName: "Example",
      projectDescShort: "Example",
      projectDescLong: "This is the long desc.",
      projectThumbnailPath: "/myWork/sample_project.jpg",
      projectLink: "/",
      projectScreenshots: [],
      isFeatured: false,
      category: "web",
    },
    {
      projectName: "Example",
      projectDescShort: "Example",
      projectDescLong: "This is the long desc.",
      projectThumbnailPath: "/myWork/sample_project.jpg",
      projectLink: "/",
      projectScreenshots: [],
      isFeatured: true,
      category: "web",
    },
  ];

  return (
    <div className="border-blue py-5">
      <div className="container overflow-hidden">
        <h2 className="section-heading">MY WORK</h2>
        <div className="inner-container text-center border-red">
          <div className="row gy-4 gx-4">
            {workData.map((project) => {
              if (project.isFeatured) {
                return (
                  <div className="col-lg-8 col-sm-12 border-green">
                    <ProjectBlock projectData={project} />
                  </div>
                );
              } else {
                return (
                  <div className="col-lg-4 col-md-6 col-sm-12 border-green order">
                    <ProjectBlock projectData={project} />
                  </div>
                );
              }
            })}
          </div>
          {/* <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 border-green">
              Row 3
            </div>
            <div className="col-lg-8 col-md-6 col-sm-12 border-green">
              Row 3
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default MyWork;
