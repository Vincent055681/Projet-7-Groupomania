import React from "react";
import "./Tab.scss"

const Tab = ( {children, onClick, className} ) => {
  return (
    <div className={className} onClick={onClick}>
        <h3>{children}</h3>
    </div>
  );
};

export default Tab;
