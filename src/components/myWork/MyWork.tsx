import React, { ChangeEvent, useEffect, useState } from "react";
import ProjectBlock from "./ProjectBlock";
import { ProjectFilterCategory } from "../../interfaces/ProjectFilterCategory";
import workData from "../../assets/data/WorkShowcaseData";
import projectFilterCategoriesData from "../../assets/data/projectFilterCategoriesData";
import { motion } from "framer-motion";

import "../../App.scss";

const MyWork = () => {
  const [selectedFilter, setSelectedFilter] = useState("");
  // const [elementsForAnimation, setElementsForAnimation] = useState<any>([]);

  const filterCategories: ProjectFilterCategory[] = projectFilterCategoriesData;

  useEffect(() => {
    setSelectedFilter(filterCategories[0].categoryId);
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
          <div className="row gy-4 gx-3 pb-5 mt-4">
            {workData
              .filter((project) => {
                if (selectedFilter === "all") {
                  return project;
                } else {
                  return project.category === selectedFilter;
                }
              })
              .map((project, index) => {
                if (project.isFeatured) {
                  return (
                    <motion.div
                      className="col-lg-8 col-sm-12 border-green order"
                      initial={{ y: "9rem" }}
                      whileInView={{ y: "0rem" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 + index * 0.1 }}
                    >
                      <ProjectBlock projectData={project} key={project.id} />
                    </motion.div>
                  );
                } else {
                  return (
                    <motion.div
                      className="col-lg-4 col-md-6 col-sm-12 border-green order"
                      initial={{ y: "9rem" }}
                      whileInView={{ y: "0rem" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 + index * 0.1 }}
                    >
                      <ProjectBlock projectData={project} key={project.id} />
                    </motion.div>
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
