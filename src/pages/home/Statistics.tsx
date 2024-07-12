import React, {useState, useEffect} from 'react';
import {getLabelCounts} from '../../apis/post';


const Statistics = () => {
    const [labelCounts, setLabelCounts] = useState<LabelCount[]>([]);

    useEffect(() => {
        (async () => {
            const ret = await getLabelCounts();
            setLabelCounts(ret);
        })();
    }, []);


    return (
        <div>
            <h1 className="text-2xl text-center m-4 font-bold md:text-left">통계</h1>
            <div className="grid grid-cols-3 gap-3 md:grid-cols-5 md:gap-5">
                {
                    labelCounts.map((labelCount: LabelCount, id: number) =>
                        <LabelCount labelCount={labelCount} key={id}/>)
                }
            </div>
        </div>
    );
};

interface Props {
    labelCount: LabelCount
}

const LabelCount = ({labelCount}: Props) => {
    const style = {
        backgroundColor: `#${labelCount.color}8c`,
        border: `3px solid #${labelCount.color}`,
    }

    return (
        <button style={style} className="rounded flex flex-col items-center justify-center p-2 text-base">
            <span className="truncate text-center w-full mb-1 font-bold">{labelCount.name}</span>
            <span>{labelCount.count} 개</span>
        </button>
    );
};


export default Statistics;
