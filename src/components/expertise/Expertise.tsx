import React from "react";
import "./Expertise.scss";

const Expertise = () => {
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
