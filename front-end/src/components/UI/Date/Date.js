import React from "react";
import "./Date.scss";

const Date = ({ className, date }) => {
  
  return (
      <div className={className}>{date}</div>
  )
};

export default Date;
