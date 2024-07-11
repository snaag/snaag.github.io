import React from 'react';
import Profile from "./Profile";
import Statistics from "./Statistics";
import RecentPostList from "./RecentPostList";

const Home = () => {
    return (
        <div className="grid grid-cols-1 gap-y-4">
            <Profile />
            <Statistics />
            <RecentPostList />
        </div>
    );
};

export default Home;