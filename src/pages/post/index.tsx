import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {getIssue} from "../../apis/post";

const Post = () => {
    const {postId = ""} = useParams();
    const [post, setPost] = useState<Issue>({} as Issue);

    useEffect(() => {
        (async () => {
            await loadPost();
        })()
    }, []);

    const loadPost = async () => {
        const response = await getPost(postId);
        setPost(response);
    }

    return (
        <div>
            <h1 className="text-3xl font-bold underline">{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
};

export default Post;
