import React from 'react';
import "./Trash.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Trash = () => {
    return (
        <div className="post__trash">
            <FontAwesomeIcon icon={faTrash} color="#f57251" />
        </div>
    );
};

export default Trash;