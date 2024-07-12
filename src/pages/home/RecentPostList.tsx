import React, {useState} from 'react';
import {getIssues} from "../../apis/post";
import Label from "../../components/Label";

const RecentPostList = () => {
    const [posts, setPosts] = useState<Issue[]>([]);

    (async () => {
        const result = await getIssues();
        setPosts(result.data);
    })();

    return (
        <div>
            <h1 className="text-2xl text-center m-8 font-bold md:text-left">최근 글 목록</h1>
            <div>
                {
                    posts.map((post, id) => <RecentPostTitle post={post} key={id}/>)
                }
            </div>
        </div>
    );
};

interface Props {
    post: Issue
}

const RecentPostTitle = ({post}: Props) => {
    return (
        <div className="flex items-center mb-2">
                {
                    post.labels.map((label, id) => <Label label={label} key={id}/>)
                }
            <span className="ml-2 truncate w-full">{post.title}</span>
        </div>
    );
};


export default RecentPostList;