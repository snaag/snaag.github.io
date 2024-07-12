import React from 'react';
import {getNamesAndCounts} from '../../apis/post';
const Statistics = () => {
    (async () => {
        const ret: DtoNameAndCounts = await getNamesAndCounts();
        console.log(ret);
    })()

    return (
        <div>
            <h1 className="text-2xl text-center m-4 font-bold md:text-left">통계</h1>
        </div>
    );
};

export default Statistics;