import React from "react";
import "./Tab.scss"

const Tab = ( {children, onClick} ) => {
  return (
    <div className="tab">
      <div className="tab-connexion" onClick={onClick}>
        <h3>{children}</h3>
      </div>
    </div>
  );
};

export default Tab;
