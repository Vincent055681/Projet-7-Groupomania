import React from "react";
import Header from "../components/Header/Header";
import Publications from "../components/Publications/Publications";
import WhatsUp from "../components/WhatsUp/WhatsUp";
import "./NewsFeed.scss";

const NewsFeed = () => {
  return (
    <>
      <Header />
      <WhatsUp />
      <Publications />
    </>
  );
};

export default NewsFeed;
