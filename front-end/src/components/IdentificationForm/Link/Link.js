import React from 'react';
import "./Link.scss"

const Link = ({content, onClick}) => {
    return (
        <p className="link" onClick={onClick}>{content}</p>
    );
};

export default Link;