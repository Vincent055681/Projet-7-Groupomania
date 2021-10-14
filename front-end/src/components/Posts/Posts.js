import React, { useState, useEffect } from "react";
import Post from "./Post/Post";
import "./Posts";
import "./Posts.scss";

import ENDPOINTS from "../../api/endpoints";
import { GET } from "../../api/axios";

const Posts = () => {
  const [dataApi, setDataApi] = useState([]);
  const [displayData, setDisplayData] = useState(true)
  useEffect(() => {
    const toFetch = async () => {
      const axiosResponse = await GET(ENDPOINTS.GET_ALL_POSTS);
      if (axiosResponse.status === 200) {
        setDataApi(axiosResponse.data);
        
      } else {
        setDisplayData(false)
        // localStorage.clear()
      }
    };
    toFetch();
    
  }, []);

  return (
    <div className="posts">
      {displayData ? dataApi.map((post) => {
        return <Post post={post} key={post.id} />;
      }) : `Vous devez être connecté pour pouvoir poster un message`}
    </div>
  );
};

export default Posts;
