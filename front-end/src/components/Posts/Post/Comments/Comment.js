import React, { useState, useEffect } from "react";

import "./Comment.scss";

import axios from "axios";

import dayjs from "dayjs";
import Trash from "../../../UI/Trash/Trash";
import Avatar from "../../../UI/Avatar/Avatar";
require("dayjs/locale/fr");
const relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);

const Comment = ({ comment }) => {
  // // Render Trash component if user is Admin or if user is author of the comment

  const { id: comment_id } = comment;
  const [trash, setTrash] = useState(false);
  const [imgSrc, setImgSrc] = useState("")

  useEffect(() => {
    const toFetchTrash = async () => {
      try {
        const response = await axios.get(`http://localhost:4200/api/comment/${comment_id}`);
        let isAdmin = await axios.get(`http://localhost:4200/api/user/${JSON.parse(localStorage.getItem("user")).user_id}`)
        isAdmin = isAdmin.data[0].admin;
          if (response.data[0].author_id === JSON.parse(localStorage.getItem("user")).user_id || isAdmin) {
          
          setTrash(true);
        }
      } catch (err) {
        throw err;
      }
    };
    toFetchTrash();
  }, [comment_id]);


  const handleClick = () => {
    const deleteComment = async () => {
      try {
        const response = await axios.delete(`http://localhost:4200/api/comment/${comment_id}`);
        if (response.status === 200) document.location.reload();
      } catch (err) {
        throw err;
      }
    };
    deleteComment();
  };

  const toFetchAvatarOfCommenter = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4200/api/user/image/${comment.author_id}`
      );
      if (response.data[0]) setImgSrc(response.data[0].image_url)
      else setImgSrc("./images/profils/default/mee.png")
    } catch (err) {
      throw err;
    }
  };
     toFetchAvatarOfCommenter()

  return (
    <div className="comment">
      <div className="comment__author-infos">
        <Avatar className="comment__author_avatar" imgSrc={imgSrc} />
        {/* <div className="comment__author-id">{comment.author_id}</div> */}
        <div className="comment__author-name">
          {`${comment.author_firstname} ${comment.author_lastname}`}
        </div>
      </div>
      {trash && <Trash comment={comment} onClick={handleClick} />}
      <div className="comment__message">{comment.message}</div>
      <div className="comment__date">
        {dayjs(comment.created_at).locale("fr").fromNow()}
      </div>
    </div>
  );
};

export default Comment;
