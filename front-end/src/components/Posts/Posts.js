import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Post from "./Post/Post";
import "./Posts";
import "./Posts.scss";
const axios = require("axios");

const Posts = () => {
  const [dataApi, setDataApi] = useState([]);
  useEffect(() => {
    const toFetch = async () => {
      const response = await fetch("http://localhost:4200/api/post");
      const data = await response.json();
      console.log(data);
      setDataApi(data);
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
