import React from 'react';
import "./Trash.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Trash = ({onClick}) => {
    return (
        <div className="trash" onClick={onClick}>
            <FontAwesomeIcon icon={faTrash} />
        </div>
    );
};

export default Trash;