import React from 'react';
import Profile from "./Profile";
import Statistics from "./Statistics";
import RecentPostList from "./RecentPostList";

const Home = () => {
    return (
        <div>
            <Profile />
            <Statistics />
            <RecentPostList />
        </div>
    );
};

export default Home;