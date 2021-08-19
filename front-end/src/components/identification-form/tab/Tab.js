import React from "react";
import "./tab.scss";

const Tab = (props) => {
  const { title, link } = props;
  return (
    <div className="tab">
      <h3>{title}</h3>
    </div>
  );
};

export default Tab;
