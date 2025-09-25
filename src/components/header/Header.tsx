import "../../App.scss";
import { HashLink } from "react-router-hash-link";
import BackToTopButton from "../backToTop/BackToTopButton";
import "./Header.scss";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-dark navbar-expand-lg border-blue px-5 pt-5 pb-3">
        <div className="container-fluid border-red justify-content-between">
          <a className="brand-logo" href="/portfolio">
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
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href={`/portfolio`}
                >
                  Home
                </a>
              </li>
              <li className="nav-item px-2">
                <HashLink className="nav-link" smooth to={`${"#experience"}`}>
                  Experience
                </HashLink>
              </li>
              <li className="nav-item px-2">
                <HashLink className="nav-link" smooth to={`${"#achievements"}`}>
                  Achievements
                </HashLink>
              </li>
              <li className="nav-item px-2">
                <HashLink className="nav-link" smooth to={`${"#expertise"}`}>
                  Expertise
                </HashLink>
              </li>
              <li className="nav-item px-2">
                <HashLink className="nav-link" smooth to={`${"#myWork"}`}>
                  My Work
                </HashLink>
              </li>
              <li className="nav-item px-2">
                <HashLink className="nav-link" smooth to={`${"#socials"}`}>
                  Socials
                </HashLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <BackToTopButton />
    </div>
  );
};

export default Header;
