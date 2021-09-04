import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Post from "./Post/Post";
import "./Posts.scss";
const axios = require("axios");

const Posts = () => {
  const [dataApi, setDataApi] = useState([]);
  const api = axios.create({
    baseURL: `http://localhost:4200/`,
  });
  useEffect(() => {
    api
      .get("/api/post")
      .then((res) => {
        setDataApi(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(dataApi);

  return (
    <div className="posts">
      <Post />
      <div>{dataApi.map((post) => console.log("4"))}</div>
    </div>
  );
};

export default Posts;
