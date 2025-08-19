import "./Experience.scss";
import "../../App.scss";
import Accordion from "./Accordion";

const Experience = () => {
  return (
    <div className="py-5 --section-margin-lg" id="experience">
      <div className="container">
        <h2 className="section-heading">MY EXPERIENCE</h2>
        <div className="w-100">
          <Accordion />
        </div>
      </div>
    </div>
  );
};

export default Experience;
