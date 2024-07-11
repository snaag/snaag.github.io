import React from 'react';
import {useParams} from "react-router-dom";

const Post = () => {
    const {postId} = useParams();

    return (
        <div>
            <h1>Post {postId}</h1>
        </div>
    );
};

export default Post;
