import React from "react";
import "./Media.scss";

const Media = ({ mediaURL }) => {
  console.log(mediaURL);

  return (
    <div className="media">
      {<img src={mediaURL} alt="myPicture" className="media__img"/>}
    </div>
  );
}

export default Media;
