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
            <div className="sticky top-10 md:top-12 bg-white p-3 z-10 md:p-2 w-full block">
                <h1 className="text-xl font-bold underline text-center md:mt-2 md:mb-10 md:text-3xl">
                    {post.title}
                </h1>
            </div>
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
