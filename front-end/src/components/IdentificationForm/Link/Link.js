import React from 'react';
import "./Link.scss"

const Link = ({content}) => {
    return (
        <p className="link">{content}</p>
    );
};

export default Link;