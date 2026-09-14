import { useEffect, useState } from "react";
import IExpertiseData from "../../interfaces/IExpertiseData";
import "./Expertise.scss";
import ExpertiseContainer from "./ExpertiseContainer";
import HardAndSoftSkillsContainer from "./HardAndSoftSkillsContainer";
import "../../App.scss";
import ExpertiseData from "../../assets/data/ExpertiseData";
import HardAndSoftSkillsData from "../../assets/data/HardAndSoftSkillsData";
import IHardAndSoftSkill from "../../interfaces/IHardAndSoftSkill";

const Expertise = () => {
  const [expertiseData, setExpertiseData] = useState<IExpertiseData[]>([]);
  const [hardAndSoftSkillData, setHardAndSoftSkillsData] = useState<
    IHardAndSoftSkill[]
  >([]);

  useEffect(() => {
    setExpertiseData(ExpertiseData);
    setHardAndSoftSkillsData(HardAndSoftSkillsData);
  }, []);

  return (
    <div className="border-blue py-5 --section-margin-lg" id="expertise">
      <div className="container">
        <h2 className="section-heading">EXPERTISE</h2>

        <div className="inner-container text-center border-red">
          <div className="row h-20 gx-2 gy-2">
            {expertiseData.map((data) => {
              return (
                <div
                  className="col-lg-4 col-md-6 col-sm-12"
                  key={data.expertiseTitle}
                >
                  <ExpertiseContainer data={data} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
