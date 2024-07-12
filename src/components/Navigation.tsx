import React from 'react';
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <div className="flex justify-between sticky top-0 bg-green-300 p-2 text-base md:p-3">
            <h2 className="hidden font-bold md:block">snaag 블로그</h2>
            <div className="grid grid-cols-2">
                <Link to={'/'}>메인으로</Link>
                <Link to={'post-list'}>글 목록으로</Link>
            </div>
            <h2 className="block font-bold md:hidden">snaag</h2>
        </div>
    );
};

export default Navigation;
