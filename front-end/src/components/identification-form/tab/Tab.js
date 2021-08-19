import React from "react";
import { NavLink } from "react-router-dom";
import "./tab.scss";

const Tab = (props) => {
  const { title, link } = props;
  return (
    <NavLink exact to={link} activeClassName="active">
      <div className="tab">
        <h3>{title}</h3>
      </div>
    </NavLink>
  );
};

export default Tab;
