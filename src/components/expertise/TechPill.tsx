import React from "react";

const TechPill = (props: { pill: string }) => {
  return <div className="pillContainer py-1 px-3 mb-3 me-3">{props.pill}</div>;
};

export default TechPill;
