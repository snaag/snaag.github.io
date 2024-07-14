import React from 'react';
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <div className="flex justify-between sticky top-0 bg-green-300 p-2 text-base md:p-3">
            <h2 className="hidden font-bold md:block">
                <Link to={'/'}>snaag 블로그</Link>
            </h2>
            <Link to={'/'}>메인으로</Link>
            <h2 className="block font-bold md:hidden">
                <Link to={'/'}>snaag</Link>
            </h2>
        </div>
    );
};

export default Navigation;
