import React from "react";
import "./Post.scss";

import Avatar from "../../UI/Avatar/Avatar";
import Date from "../../UI/Date/Date";
import Author from "./Author/Author";
import Text from "./Text/Text";
import Media from "./Media/Media";

// Permet d'afficher le temps relatif par rapport à la date actuelle, et en français
import dayjs from "dayjs";
import ToInteract from "./ToInteract/ToInteract";
import ToRespond from "./ToRespond/ToRespond";
import Comments from "./Comments/Comments";
require("dayjs/locale/fr");
const relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);
// ===

const Post = ({ post }) => {
  console.log(post);
  const { author_firstname, author_lastname, date_creation, message, media, id: postId} = post;
  return (
    <>
    <div className="post">
      <div className="post__author_group">
        <Avatar className={"post__avatar"} />
        <div className="post__author_and_date">
          <Author className="post__author" author={`${author_firstname} ${author_lastname}`} />
          <Date
            className="post__date"
            date={dayjs(date_creation).locale("fr").fromNow()}
          />
        </div>
      </div>
      <Text message={message} />
      { media && <Media /> }
      <ToInteract postId={postId} /> 
      <Comments postId={postId} />
      <ToRespond postId={postId}/>
    </div>
      </>
  );
};

export default Post;
