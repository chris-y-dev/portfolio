import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../../App.scss";
import "./Header.scss";

const Header = () => {
  const [absolutePath, setAbsolutePath] = useState("");
  const location = useLocation();

  useEffect(() => {
    // console.log(location.pathname);
    determineHref(location.pathname);
  });

  function determineHref(locationPathname: string): void {
    const pageName = locationPathname.split("/")[1];
    console.log(pageName);

    if (pageName === "") {
      setAbsolutePath("");
    } else {
      setAbsolutePath("http://localhost:3000");
    }
  }

  return (
    <div>
      <nav className="navbar navbar-dark navbar-expand-md border-blue px-5">
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
              <li className="nav-item mx-3">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href={`${absolutePath}`}
                >
                  Home
                </a>
              </li>
              <li className="nav-item mx-3">
                <a
                  className="nav-link"
                  href={`${absolutePath + "#experience"}`}
                >
                  Experience
                </a>
              </li>
              <li className="nav-item mx-3">
                <a
                  className="nav-link"
                  href={`${absolutePath + "#achievements"}`}
                >
                  Achievements
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link" href={`${absolutePath + "#expertise"}`}>
                  Expertise
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link" href={`${absolutePath + "#myWork"}`}>
                  My Work
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link" href={`${absolutePath + "#socials"}`}>
                  Socials
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
