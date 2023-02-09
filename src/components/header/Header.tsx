import React from "react";
import "../../App.scss";
import "./Header.scss";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm border-blue px-5">
        <div className="container-fluid border-red justify-content-between">
          <a className="brand-logo" href="/">
            CHRIS_Y.DEV
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end border-green"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav justify-content-right">
              <li className="nav-item mx-4">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item mx-4">
                <a className="nav-link" href="#experience">
                  Experience
                </a>
              </li>
              <li className="nav-item mx-4">
                <a className="nav-link" href="#expertise">
                  Expertise
                </a>
              </li>
              <li className="nav-item mx-4">
                <a className="nav-link" href="#myWork">
                  My Work
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
