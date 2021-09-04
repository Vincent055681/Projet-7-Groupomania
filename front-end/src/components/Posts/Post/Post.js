import React from 'react';
import Avatar from '../../UI/Avatar/Avatar';
import Date from '../../UI/Date/Date';
import Author from './Author/Author';
import Text from './Text/Text';

const Post = () => {
    return (
        <div className="post">
            <Avatar />
            <Author />
            <Date />
            <Text />
            
        </div>
    );
};

export default Post;