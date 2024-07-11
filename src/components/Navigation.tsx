import React from 'react';
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <div>
            <Link to={'post'}>Post</Link>
            <br/>
            <Link to={'post-list'}>Post Detail</Link>
        </div>
    );
};

export default Navigation;
