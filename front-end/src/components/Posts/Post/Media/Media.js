import React, { useEffect } from "react";
import axios from "axios";
import "./Media.scss";

const Media = ({ mediaURL }) => {
  console.log(mediaURL);
//   useEffect(() => {
//     const toFetch = async () => {
//       try {
//         const response = await axios.get(media);
//       } catch (err) {
//         throw err;
//       }
//     };
//     toFetch();
//   }, []);

  return (
    <div className="media">
      <img src={mediaURL} alt="MEDIA" class="media__img" />
    </div>
  );
};

export default Media;
