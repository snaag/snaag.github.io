import React from 'react';
import Label from "./Label";
import {Link} from "react-router-dom";

interface Props {
    post: Issue
}
const ListPostTitle = ({post}: Props) => {
    return (
        <div className="flex items-center mb-2">
            <Link to={`/post/${post.number}`}>

            {
                post.labels.map((label, id) => <Label label={label} key={id}/>)
            }
            <span className="ml-2 truncate w-full">{post.title}</span>
            </Link>
        </div>
    );
};

export default ListPostTitle;