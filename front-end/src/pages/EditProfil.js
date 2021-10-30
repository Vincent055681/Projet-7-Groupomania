import "./EditProfil.scss";

import React from "react";
import EditProfilModal from "../components/EditProfilModal/EditProfilModal";
import NewsFeed from "./NewsFeed";

const EditProfil = () => {
  return (
    <>
      <EditProfilModal />
      <div className="newsfeed">
        <NewsFeed transparent />
      </div>
    </>
  );
};

export default EditProfil;
