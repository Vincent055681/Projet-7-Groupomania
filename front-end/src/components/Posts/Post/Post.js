import React from "react";
import "./Post.scss";

import Avatar from "../../UI/Avatar/Avatar";
import Date from "../../UI/Date/Date";
import Author from "./Author/Author";
import Interactions from "./Interactions/Interactions";
import Text from "./Text/Text";

import dayjs from "dayjs"
var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)

const Post = ({ post }) => {
  const { author, date_creation, message } = post;
  return (
    <div className="post">
      <div className="post__author_group">
        <Avatar className={"post__avatar"} />
        <div className="post__author_and_date">
          <Author className="post__author" author={author} />
          <Date className="post__date" date={dayjs(date_creation).fromNow()} />
        </div>
      </div>
      <Text message={message} />
      {/* <Media /> */}
      <Interactions />
    </div>
  );
};

export default Post;
