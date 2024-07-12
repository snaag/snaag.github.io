import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import {getIssuesByLabel} from "../../apis/post";
import ListPostTitle from "../../components/ListPostTitle";
import Category from "./Category";

const PostList = () => {
    const {label = ""} = useParams();
    const [posts, setPosts] = useState<Issue[]>([]);

    (async () => {
        const response = await getIssuesByLabel(label);
        setPosts(response.data);
    })();


    return (
        <div>
            <h2 className="text-lg text-center font-bold truncate max-w-full m-4 p-2">{label}</h2>
            <div className="grid grid-cols-1 md:grid-cols-4">
                <div className="col-span-1 md:col-span-3">
                    {
                        posts.map((post, id) => <ListPostTitle post={post} key={id} />)
                    }
                </div>
                <Category />
            </div>

        </div>
    );
};

export default PostList;
