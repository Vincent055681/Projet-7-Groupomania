import React, { useState, useEffect } from "react";
import Post from "./Post/Post";
import "./Posts";
import "./Posts.scss";

import ENDPOINTS from "../../api/endpoints";
import { GET } from "../../api/axios";

const Posts = () => {
  const [dataApi, setDataApi] = useState([]);
  useEffect(() => {
    const toFetch = async () => {
      const axiosCall = await GET(ENDPOINTS.GET_POSTS);
      setDataApi(axiosCall.data);
      console.log(axiosCall.data);
    };
    toFetch();
  }, []);
  return (
    <div className="posts">
      {dataApi.map((post) => {
        return <Post post={post} key={post.id} />;
      })}
    </div>
  );
};

export default Posts;
