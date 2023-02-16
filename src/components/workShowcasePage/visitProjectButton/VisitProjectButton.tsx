import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import "./VisitProjectButton.scss";

const VisitProjectButton = (props: { projectUrl: string | undefined }) => {
  const [url, setUrl] = useState<string | undefined>(undefined);

  console.log(props.projectUrl);

  useEffect(() => {
    setUrl(props.projectUrl);
  }, [props.projectUrl]);

  return (
    <div className="visitProjectButton_container">
      <a href={url}>
        <button className="visitProjectButton d-flex flex-row align-items-center justify-content-between py-2 px-3">
          Visit Project
          <FontAwesomeIcon icon={faArrowAltCircleRight} className="ms-3 icon" />
        </button>
      </a>
    </div>
  );
};

export default VisitProjectButton;
