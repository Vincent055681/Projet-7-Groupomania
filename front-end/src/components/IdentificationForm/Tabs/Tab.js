import React from "react";
import "./Tab.scss"
import "./Tabs.scss"

const Tab = ( {children, onClick} ) => {
  return (
    <div className="tabs">
      <div className="tab-connexion" onClick={onClick}>
        <h3>{children}</h3>
      </div>
    </div>
  );
};

export default Tab;
