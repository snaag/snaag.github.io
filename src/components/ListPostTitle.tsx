import React from 'react';
import Label from "./Label";

interface Props {
    post: Issue
}
const ListPostTitle = ({post}: Props) => {
    return (
        <div className="flex items-center mb-2">
            {
                post.labels.map((label, id) => <Label label={label} key={id}/>)
            }
            <span className="ml-2 truncate w-full">{post.title}</span>
        </div>
    );
};

export default ListPostTitle;