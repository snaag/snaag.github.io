import React from 'react';
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <div className="flex justify-between sticky top-0 bg-green-300">
            <h2 className="hidden md:block">snaag 블로그</h2>
            <div className="grid grid-cols-2">
                <Link className="text-base" to={'/'}>메인으로</Link>
                <Link className="text-base" to={'post-list'}>글 목록으로</Link>
            </div>
            <h2 className="block md:hidden">snaag</h2>
        </div>
    );
};

export default Navigation;
