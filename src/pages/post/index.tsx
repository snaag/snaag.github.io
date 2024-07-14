import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import {getPost} from "../../apis/post";
import '../../styles/markdownStyle.scss';
import Reference from "./Reference";

const Post = () => {
    const {postId = ""} = useParams();
    const [post, setPost] = useState<Post>({
        markdowns: [],
        references: [],
        title: "",
        labels: []
    });

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
        <>
            <h1 className="sticky top-10 bg-white p-1">
                <h1 className="text-xl font-bold underline text-center m-3 z-10 md:text-3xl">
                    {post.title}
                </h1>
            </h1>
            {
                post.markdowns.map((markdown, id) =>
                    <ReactMarkdown
                        key={id}
                        children={markdown}
                        className="reactMarkdown"
                    />
                )
            }
            <Reference references={post.references} />
        </>
    );
};

export default Post;
