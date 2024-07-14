import React, {useEffect, useState} from 'react';
import {getIssues} from "../../apis/post";
import ListPostTitle from "../../components/ListPostTitle";

const RecentPostList = () => {
    const [posts, setPosts] = useState<Issue[]>([]);

    useEffect(() => {
        (async () => {
            await loadPosts();
        })();
    },  []);

    const loadPosts = async () => {
        const result = await getIssues();
        setPosts(result.data);
    }

    return (
        <div>
            <h1 className="text-2xl text-center m-8 font-bold md:text-left">최근 글 목록</h1>
            <div>
                {
                    posts.map((post, id) => <ListPostTitle post={post} key={id}/>)
                }
            </div>
        </div>
    );
};


export default RecentPostList;