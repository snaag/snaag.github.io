import React from 'react';
import RecentPostList from "./RecentPostList";
import Statistics from "./Statistics";
import Profile from "./Profile";

const PostList = () => {
    return (
        <div>
            <Profile />
            <Statistics />
            <RecentPostList />
        </div>
    );
};

export default PostList;
