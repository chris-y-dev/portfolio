import React from "react";

const MyWork = () => {
  return (
    <div className="border-blue py-5">
      <div className="container">
        <h2 className="section-heading">MY WORK</h2>
        <div className="inner-container text-center border-red">
          <div className="row">
            <div className="col-lg-8 col-md-6 col-sm-12 border-green">
              Column Primary
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 border-green">
              Column 2
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-12 border-green">Row 2</div>
            <div className="col-md-4 col-sm-12 border-green">Row 2</div>
            <div className="col-md-4 col-sm-12 border-green">Row 2</div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 border-green">
              Row 3
            </div>
            <div className="col-lg-8 col-md-6 col-sm-12 border-green">
              Row 3
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyWork;
