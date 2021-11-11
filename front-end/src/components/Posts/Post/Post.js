import React, { useState, useEffect } from "react";

import "./Post.scss";

import axios from "axios";

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
import Trash from "../../UI/Trash/Trash";
require("dayjs/locale/fr");
const relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);
// ===

const Post = ({ post }) => {
  const [mediaURL, setMediaURL] = useState(null);

  const [imgSrc, setImgSrc] = useState("")

  const id = post.id;
  useEffect(() => {
    const toFetch = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4200/api/post/image/${id}`
        );
        if (response.data.length > 0) {
          setMediaURL(response.data[0].image_url);
        }
      } catch (err) {
        throw err;
      }
    };
    toFetch();
  }, [id]);

  const {
    author_firstname,
    author_lastname,
    date_creation,
    message,
    id: postId,
    post_user_id: user_id,
  } = post;

  // Render Trash component if user is Admin or if user is author of the post

  const [trash, setTrash] = useState(false);

  useEffect(() => {
    const toFetchTrash = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4200/api/post/${id}`
        );
        let isAdmin = await axios.get(
          `http://localhost:4200/api/user/${
            JSON.parse(localStorage.getItem("user")).user_id
          }`
        );
        isAdmin = isAdmin.data[0].admin;
        if (
          response.data[0].user_id ===
            JSON.parse(localStorage.getItem("user")).user_id ||
          isAdmin
        ) {
          setTrash(true);
        }
      } catch (err) {
        throw err;
      }
    };
    toFetchTrash();
  }, [id]);

  const handleClick = () => {
    const deletePost = async () => {
      try {
        const response = await axios.delete(
          `http://localhost:4200/api/post/${id}`
        );
        if (response.status === 200) document.location.reload();
      } catch (err) {
        throw err;
      }
    };
    deletePost();
  };

  const toFetchAvatarOfPoster = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4200/api/user/image/${post.user_id}`
      );
      if (response.data[0]) setImgSrc(response.data[0].image_url)
      else setImgSrc("./images/profils/default/mee.png")
    } catch (err) {
      throw err;
    }
  };
  toFetchAvatarOfPoster()

  return (
    <>
      <div className="post">
        <div className="post__author_group">
          <Avatar className={"post__avatar"} imgSrc={imgSrc} />
          <div className="post__author_and_date">
            <Author
              className="post__author"
              author={`${author_firstname} ${author_lastname}`}
            />
            <Date
              className="post__date"
              date={dayjs(date_creation).locale("fr").fromNow()}
            />
          </div>
        </div>
        {trash && <Trash post={post} onClick={handleClick} />}
        <Text message={message} />
        {mediaURL && <Media mediaURL={mediaURL} />}
        <ToInteract postId={postId} />
        <Comments postId={postId} />
        <ToRespond postId={postId} />
      </div>
    </>
  );
};

export default Post;
