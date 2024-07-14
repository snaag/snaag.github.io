import React from 'react';
import Label from "./Label";
import {Link} from "react-router-dom";

interface Props {
    post: Issue
}
const ListPostTitle = ({post}: Props) => {
    return (
        <div className="mb-3">
            <Link
                className="flex items-center"
                to={`/post/${post.number}`}>
                {
                    post.labels.map((label, id) => <Label label={label} key={id}/>)
                }
                <span className="truncate block">{post.title}</span>
            </Link>
        </div>
    );
};

export default ListPostTitle;