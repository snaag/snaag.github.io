import React from 'react';
import {Link} from "react-router-dom";

const Error = () => {
    return (
        <div className="flex flex-col h-screen justify-center items-center">
            <span className="text-xl mb-2">문제가 발생했어요!</span>
            <Link className="text-base" to={'/'}>돌아가기</Link>
        </div>
    );
};

export default Error;
