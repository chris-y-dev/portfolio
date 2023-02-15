import React, { ChangeEvent, useEffect, useState } from "react";
import MyWorkData from "../../interfaces/MyWorkData";
import ProjectBlock from "./ProjectBlock";
import { ProjectFilterCategory } from "../../interfaces/ProjectFilterCategory";
import workData from "../../assets/data/WorkShowcaseData";

const MyWork = () => {
  const [selectedFilter, setSelectedFilter] = useState("");

  const filterCategories: ProjectFilterCategory[] = [
    {
      categoryName: "All",
      categoryId: "all",
    },
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
              {filterCategories.map((category) => {
                return (
                  <option
                    value={category.categoryId}
                    id={category.categoryId}
                    key={category.categoryId}
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
                      <ProjectBlock
                        projectData={project}
                        key={project.projectId}
                      />
                    </div>
                  );
                } else {
                  return (
                    <div className="col-lg-4 col-md-6 col-sm-12 border-green order">
                      <ProjectBlock
                        projectData={project}
                        key={project.projectId}
                      />
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
