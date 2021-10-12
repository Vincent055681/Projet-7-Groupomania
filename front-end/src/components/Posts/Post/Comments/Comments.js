import React, { useEffect, useState } from "react";
import "./Comments.scss";

import { POST } from "../../../../api/axios";
import ENDPOINTS from "../../../../api/endpoints";

const Comments = ({ postId }) => {

    // States
    const [comments, setComments] = useState()

  useEffect(() => {
    async function fetchData() {
      const data = {
        postId: postId,
      };
      const response = await POST(ENDPOINTS.GET_ALL_COMMENTS, data);
      if (response.data[0]) {
        console.log(response.data[0].message);
        setComments(response.data[0].message)
        
      } else {
          console.log('else');
        setComments("Pas de commentaires")
      }
    }
    fetchData();
    console.log(comments);
  }, []);

  return (
    <>
      <div>{comments}</div>
      <div>jyty</div>
    </>
  );
};

export default Comments;
