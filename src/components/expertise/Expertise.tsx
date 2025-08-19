import { useEffect, useState } from "react";
import IExpertiseData from "../../interfaces/IExpertiseData";
import "./Expertise.scss";
import ExpertiseContainer from "./ExpertiseContainer";
import HardAndSoftSkillsContainer from "./HardAndSoftSkillsContainer";
import "../../App.scss";
import { motion } from "framer-motion";
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

        {/* High level skills */}
        <div className="inner-container text-center border-red">
          <div className="row h-20 gx-2 gy-2">
            {expertiseData.map((data, i) => {
              return (
                <motion.div
                  className="col-lg-4 col-md-6 col-sm-12"
                  initial={{ y: "9rem" }}
                  whileInView={{ y: "0rem" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 + i * 0.1 }}
                >
                  <ExpertiseContainer data={data} />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Tiered Skills */}
        <div className="inner-container text-center border-red mt-4">
          <div className="row g-3">
            {hardAndSoftSkillData.map((skillData, i) => {
              return (
                <motion.div
                  className="col-md-6 col-sm-12 border-green"
                  initial={{ y: "9rem" }}
                  whileInView={{ y: "0rem" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 + i * 0.1 }}
                >
                  <HardAndSoftSkillsContainer skillData={skillData} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
