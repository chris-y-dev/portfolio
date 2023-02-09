import React, { ChangeEvent, useEffect, useState } from "react";
import MyWorkData from "../../interfaces/MyWorkData";
import ProjectBlock from "./ProjectBlock";
import { ProjectFilterCategory } from "../../interfaces/ProjectFilterCategory";

const MyWork = () => {
  const [selectedFilter, setSelectedFilter] = useState("");

  const filterCategories: ProjectFilterCategory[] = [
    {
      categoryName: "Software Development",
      categoryId: "software",
    },
    {
      categoryName: "Web Design and Development",
      categoryId: "web",
    },
    {
      categoryName: "Mobile Development",
      categoryId: "mobile",
    },
  ];

  const workData: MyWorkData[] = [
    {
      projectName: "FEATURED Coming Soon",
      projectDescShort: "Example",
      projectDescLong: "This is the long desc.",
      projectThumbnailPath: "/myWork/static.gif",
      projectLink: "/",
      projectScreenshots: [],
      isFeatured: true,
      category: "software",
    },
    {
      projectName: "Bilingual Website Script & Design - MBMT",
      projectDescShort:
        "Responsive web design and script for a bilingual website.",
      projectDescLong:
        "Provided the initial responsive web design (no-code) according to client requirements and requests, while considering UX concepts. Includes a JS script to show/hide the reveal language-specific navigation bar for a unique multi-lingual feature. \nOne key intention was simplicty as primary users are adults/older adults who may not be tech-savvy. Each page will have a Call-To-Action and clear actionable items to help users achieve business goals. Colour scheme was chosen for clarity of content, and to give off a professional and refreshing impression. ",
      projectThumbnailPath: "/myWork/sample_project.jpg",
      projectLink: "/",
      projectScreenshots: [],
      isFeatured: false,
      category: "software",
    },
    {
      projectName: "Coming Soon",
      projectDescShort: "Example",
      projectDescLong: "This is the long desc.",
      projectThumbnailPath: "/myWork/static.gif",
      projectLink: "/",
      projectScreenshots: [],
      isFeatured: false,
      category: "web",
    },
    {
      projectName: "Coming Soon",
      projectDescShort: "Example",
      projectDescLong: "This is the long desc.",
      projectThumbnailPath: "/myWork/static.gif",
      projectLink: "/",
      projectScreenshots: [],
      isFeatured: false,
      category: "web",
    },
    {
      projectName: "Coming Soon",
      projectDescShort: "Example",
      projectDescLong: "This is the long desc.",
      projectThumbnailPath: "/myWork/static.gif",
      projectLink: "/",
      projectScreenshots: [],
      isFeatured: false,
      category: "web",
    },
    {
      projectName: "Coming Soon",
      projectDescShort: "Example",
      projectDescLong: "This is the long desc.",
      projectThumbnailPath: "/myWork/static.gif",
      projectLink: "/",
      projectScreenshots: [],
      isFeatured: false,
      category: "web",
    },
    {
      projectName: "FEATURED Coming Soon",
      projectDescShort: "Example",
      projectDescLong: "This is the long desc.",
      projectThumbnailPath: "/myWork/static.gif",
      projectLink: "/",
      projectScreenshots: [],
      isFeatured: true,
      category: "web",
    },
  ];

  useEffect(() => {
    setSelectedFilter(filterCategories[0].categoryId);
  }, []);

  function toggleFilter(event: ChangeEvent<HTMLSelectElement>) {
    console.log(event.target.value);
    setSelectedFilter(event.target.value);
  }

  return (
    <div className="border-blue py-5" id="myWork">
      <div className="container overflow-hidden">
        <h2 className="section-heading">MY WORK</h2>
        <div className="inner-container text-center border-red">
          <div className="d-flex flex-row filter_container justify-content-center align-items-center">
            <label className="mx-3">Filter By: </label>
            <select
              className="p-1"
              id="projectFilter"
              onChange={(categoryId) => toggleFilter(categoryId)}
            >
              {selectedFilter}
              <option id="all" value="all" selected>
                All
              </option>
              {filterCategories.map((category) => {
                return (
                  <option
                    value={category.categoryId}
                    id={category.categoryId}
                    className={`filter_item`}
                  >
                    {category.categoryName}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="row gy-5 gx-5 pb-5">
            {workData
              .filter((project) => {
                if (selectedFilter === "all") {
                  return project;
                } else {
                  return project.category === selectedFilter;
                }
              })
              .map((project) => {
                if (project.isFeatured) {
                  return (
                    <div className="col-lg-8 col-sm-12 border-green order">
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
        </div>
      </div>
    </div>
  );
};

export default MyWork;
