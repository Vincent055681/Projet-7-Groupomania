import React from "react";
import "./Comment.scss";

import dayjs from "dayjs";
import Trash from "../../../UI/Trash/Trash";
require("dayjs/locale/fr");
const relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);

const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <div className="comment__author-infos">
        <div className="comment__author-id">{comment.author_id}</div>
        <div className="comment__author-name">
          {`${comment.author_firstname} ${comment.author_lastname}`}
        </div>
      </div>
      <Trash />
      <div className="comment__message">{comment.message}</div>
      <div className="comment__date">
        {dayjs(comment.created_at).locale("fr").fromNow()}
      </div>
    </div>
  );
};

export default Comment;
