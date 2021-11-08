import React from "react";
import "./Avatar.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";

const Avatar = ({ className, editable, id, imgSrc }) => {
  return (
    <div className={className}>
      <img src={`http://localhost:4200/${imgSrc}`} alt="profile_picture" />
      {editable && <input type="file" name="image" id={id} /> }
      {editable && <label htmlFor="image"> <FontAwesomeIcon icon={faImage} className="profile_picture__change" /> </label>}
    </div>
  );
};

export default Avatar;
