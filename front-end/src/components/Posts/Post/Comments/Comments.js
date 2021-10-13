import React, { useEffect, useState } from "react";
import "./Comments.scss";

import { POST } from "../../../../api/axios";
import ENDPOINTS from "../../../../api/endpoints";
import Comment from "./Comment";

import { v4 as uuid } from "uuid";

const Comments = ({ postId }) => {
  // States
  const [allComments, setAllComments] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await POST(ENDPOINTS.GET_ALL_COMMENTS, { postId });
      const data = response.data;
      if (Array.isArray(data)) {
        setAllComments((prevState) => [...prevState, ...data]);
      } else {
        console.log("else...");
        throw new Error("Oops, didn't get an array.");
      }
    }
    fetchData();
  }, [postId]);

   return (
    <div className="comments">
      {allComments.map((comment) => (
        <Comment comment={comment} key={comment.id} />
      ))}
    </div>
  );
};

export default Comments;
