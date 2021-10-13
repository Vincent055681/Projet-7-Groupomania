import React from "react";
import "./Comment.scss";

import dayjs from "dayjs";
require("dayjs/locale/fr");
const relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);

const Comment = ({ comment }) => {

  console.log(comment);
  
  return (
    <div className="comment">
     <div className="comment__author-id">{comment.author_id}</div>
     <div className="comment__author-firstname">{comment.author_firstname}</div>
     <div className="comment__author-lastname">{comment.author_lastname}</div>
     <div className="comment__message">{comment.message}</div>
     <div className="comment__date">{dayjs(comment.created_at).locale("fr").fromNow()}</div>
    </div>
  );
};

export default Comment;

