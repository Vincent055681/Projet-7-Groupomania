import React from "react";
import "./Tab.scss"

const Tab = ( {children, onClick} ) => {
  return (
    <div className="tab" onClick={onClick}>
        <h3>{children}</h3>
    </div>
  );
};

export default Tab;
