import React from 'react';
import {Link} from "react-router-dom";

const Error = () => {
    return (
        <div>
            Error!
            <br/>
            <Link to={'/'}>돌아가기</Link>
        </div>
    );
};

export default Error;
