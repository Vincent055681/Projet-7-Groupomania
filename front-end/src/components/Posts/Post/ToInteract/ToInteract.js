import React, { useEffect, useState } from "react";
import "./ToInteract.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentAlt, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { POST, PATCH } from "../../../../api/axios";
import ENDPOINTS from "../../../../api/endpoints";

const ToInteract = ({ postId }) => {

  // State
  const [nbOfLikes, setNbOfLikes] = useState(0)

  const likeHandle = async () => {
    const data = {
      userId: JSON.parse(localStorage.getItem("user")).user_id,
      postId: postId,
    };

    const response = await PATCH(ENDPOINTS.LIKE_UNLINKE, data);
  };

  useEffect(() => {
    const getLikesNb = async () => {
      const data = { postId };
      const response = await POST(ENDPOINTS.LIKE_UNLINKE, data);
      const nbOfLikes = response.data[0].likes.split(",").length - 1;
      setNbOfLikes(nbOfLikes)
    };
    getLikesNb()
  }, []);

  return (
    <div className="to-interact">
      <div className="to-interact__nb-of-likes">
        <FontAwesomeIcon icon={faThumbsUp} color={"#38618c"} />
        <p className="to-interact__nb-of-likes--number">{nbOfLikes}</p>
      </div>
      <hr />
      <div className="to-interact__buttons">
        <button onClick={likeHandle}>
          <span>
            <FontAwesomeIcon icon={faThumbsUp} color={"gray"} />
          </span>
          J'aime
        </button>
        <button>
          <span>
            <FontAwesomeIcon icon={faCommentAlt} color={"#f57251"} />
          </span>
          Commenter
        </button>
      </div>
      <hr />
    </div>
  );
};

export default ToInteract;