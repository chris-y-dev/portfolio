import React, { ChangeEvent, useEffect, useState } from "react";
import ProjectBlock from "./ProjectBlock";
import { IProjectFilterCategory } from "../../interfaces/IProjectFilterCategory";
import ProjectFilterCategoriesData from "../../assets/data/ProjectFilterCategoriesData";

import "../../App.scss";
import IWorkData from "../../interfaces/IWorkData";
import WorkShowcaseData from "../../assets/data/WorkShowcaseData";
import orderProjectsByCategory from "../../hooks/orderProjectsByCategory";

const MyWork = () => {
  const [projectFilterCategories, setProjectFilterCategories] = useState<
    IProjectFilterCategory[]
  >([]);
  const [selectedFilter, setSelectedFilter] = useState("");
  const [sortedWorkData, setSortedWorkData] = useState<IWorkData[]>([]);

  useEffect(() => {
    setProjectFilterCategories(ProjectFilterCategoriesData);
    setSelectedFilter(ProjectFilterCategoriesData[0].categoryId);
    setSortedWorkData(orderProjectsByCategory(WorkShowcaseData));
  }, []);

  function toggleFilter(event: ChangeEvent<HTMLSelectElement>) {
    console.log(event.target.value);
    setSelectedFilter(event.target.value);
  }

  return (
    <div className="border-blue py-5 --section-margin-lg" id="myWork">
      <div className="container">
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
              {projectFilterCategories.map((category) => {
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
          <div className="row gy-4 gx-3 pb-5 mt-4">
            {sortedWorkData
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
                    <div
                      className="col-lg-8 col-sm-12 border-green order"
                      key={project.id}
                    >
                      <ProjectBlock projectData={project} />
                    </div>
                  );
                } else {
                  return (
                    <div
                      className="col-lg-4 col-md-6 col-sm-12 border-green order"
                      key={project.id}
                    >
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
