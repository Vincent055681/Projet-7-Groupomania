import React, { useEffect } from "react";
import "./Publications";
const axios = require("axios");

const Publications = () => {
    const api = axios.create({
        baseURL: `http://localhost:4200/api/post`
    })
  useEffect(() => {
    api.get('/').then(res => {
        console.log(res.data)
    })
  }, [])

  return <div></div>;
};

export default Publications;
