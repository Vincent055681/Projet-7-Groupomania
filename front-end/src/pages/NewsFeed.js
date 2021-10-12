import React from "react";
import Header from "../components/Header/Header";
import Posts from "../components/Posts/Posts";
import WhatsUp from "../components/WhatsUp/WhatsUp";
import "./NewsFeed.scss";

const NewsFeed = () => {
  return (
    <>
      <Header profileTab={true} />
      <div className="container">
        <WhatsUp />
        <h3 className="publication__title">Publications récentes</h3>
        <Posts />
      </div>
    </>
  );
};

export default NewsFeed;
