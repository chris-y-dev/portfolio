import React from "react";
import "./Expertise.scss";

const Expertise = () => {
  return (
    <div className="border-blue py-5">
      <div className="container">
        <h1>Expertise</h1>
        <div className="container text-center border-red">
          <div className="row">
            <div className="col-md-4 col-sm-12 border-green">Column</div>
            <div className="col-md-4 col-sm-12 border-green">Column</div>
            <div className="col-md-4 col-sm-12 border-green">Column</div>
          </div>
        </div>
        <div className="container text-center border-red">
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
