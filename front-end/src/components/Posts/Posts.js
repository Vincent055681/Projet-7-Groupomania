import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
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
    };
    toFetch();
  }, []);
  return (
    <div className="posts">
      {dataApi.map((post) => {
        return <Post post={post} key={uuidv4()} />;
      })}
    </div>
  );
};

export default Posts;
