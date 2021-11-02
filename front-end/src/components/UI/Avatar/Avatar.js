import React from "react";
import "./Avatar.scss";

const Avatar = ({className}) => {
  return (
  <div className={className}>
    <img src="/imgs/profile-imgs/mee.png" alt="profile_picture" />
  </div>
    )
};

export default Avatar;
