import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import {getIssue} from "../../apis/post";

const Post = () => {
    const {postId = ""} = useParams();
    const [post, setPost] = useState<Issue>({} as Issue);

    (async () => {
        const response = await getIssue(postId);
        setPost(response.data);
    })()

    return (
        <div>
            <h1 className="text-3xl font-bold underline">{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
};

export default Post;
