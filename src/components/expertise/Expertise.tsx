import React, { useState } from "react";
import "./Expertise.scss";

const Expertise = () => {
  const [expertiseData, setExpertiseData] = useState([]);

  const data = [
    {
      title: "Software Dev",
      content:
        "Experience with enterprise-level technologies such as WebAPIs and AWS. Familiar with SOLID principles and CLEAN architecture, particularly the use of Depency Injection.",
    },
    {
      title: "Frontend Dev",
      content:
        "2 years of development experience in HTML, CSS, JS, React, and Angular frameworks.",
    },
    {
      title: "Web Design",
      content:
        " Passionate about designing modern websites for small businesses, informed by UX/UI principles.",
    },
  ];

  return (
    <div className="border-blue py-5">
      <div className="container">
        <h2 className="section-heading">EXPERTISE</h2>

        {/* High level skills */}
        <div className="inner-container text-center border-red">
          <div className="row">
            <div className="col-md-4 col-sm-12 border-green">Column</div>
            <div className="col-md-4 col-sm-12 border-green">Column</div>
            <div className="col-md-4 col-sm-12 border-green">Column</div>
          </div>
        </div>

        {/* Tiered Skills */}
        <div className="inner-container text-center border-red">
          <div className="row">
            <div className="col-md-6 col-sm-12 border-green">Column</div>
            <div className="col-md-6 col-sm-12  border-green">Column</div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12  border-green">Column</div>
            <div className="col-md-6 col-sm-12  border-green">Column</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
