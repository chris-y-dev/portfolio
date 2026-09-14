import "./Footer.scss";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <h2>Let's Connect.</h2>
        <p className="site-footer__message">
          Based in Canberra. Australian citizen with full working rights in
          Australia. Happy to connect on LinkedIn.
        </p>
        <a
          className="site-footer__cta"
          href="https://www.linkedin.com/in/chris-y-dev/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin as IconDefinition} />
          <span>Connect on LinkedIn</span>
          <span aria-hidden="true">-&gt;</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
