import React from "react";

const Header = () => {
  return (
    <div className="text-white">
      <nav className="navbar navbar-expand-sm border-blue px-3">
        <div className="container-fluid border-red justify-content-between">
          <a className="navbar-brand text-white" href="/">
            chrisy.dev
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
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Experience
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Expertise
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
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
