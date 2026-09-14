import "../../App.scss";
import { HashLink } from "react-router-hash-link";
import BackToTopButton from "../backToTop/BackToTopButton";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-dark navbar-expand-lg">
        <div className="header-inner">
          <a className="brand-logo" href="/portfolio">
            <span className="brand-dot" aria-hidden="true"></span>
            <span>Chris Y.</span>
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
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <HashLink className="nav-link active" smooth to="#home">
                  Home
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink className="nav-link" smooth to="#resume">
                  Resume
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink className="nav-link" smooth to="#certifications">
                  Certs & Events
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink className="nav-link" smooth to="#education">
                  Education
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink className="nav-link" smooth to="#achievements">
                  Achievements
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink className="nav-link" smooth to="#expertise">
                  Skills
                </HashLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <BackToTopButton />
    </header>
  );
};

export default Header;
