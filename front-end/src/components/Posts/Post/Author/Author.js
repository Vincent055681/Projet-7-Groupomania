import React from 'react';
import "./Author.scss"

const Author = ({className, author}) => {
    return (
        <div className={className}>
            {author}
        </div>
    );
};

export default Author;