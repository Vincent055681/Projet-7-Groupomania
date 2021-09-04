import React from "react";
import "./Post.scss";

import Avatar from "../../UI/Avatar/Avatar";
import Date from "../../UI/Date/Date";
import Author from "./Author/Author";
import Interactions from "./Interactions/Interactions";
import Text from "./Text/Text";



const Post = ({post}) => {
  console.log(post);
 // const { author, date_creation, message } = post
  return (
    <div className="post">
      <div className="post__author_group">
        <Avatar className={"post__avatar"} />
        <div className="post__author_and_date">
          <Author className="post__author" author="Vincent" />
          <Date className="post__date" date="10 Mai à 12h38" />
        </div>
      </div>
      <Text />
      {/* <Media /> */}
      <Interactions />
    </div>
  );
};

export default Post;
