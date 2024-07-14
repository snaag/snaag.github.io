import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {getLabelCounts} from "../../apis/post";

const Category = () => {
    const [labelCounts, setLabelCounts] = useState<LabelCount[]>([]);

    useEffect(() => {
        (async () => {
            await loadLabelCounts();
        })();
    }, []);

    const loadLabelCounts = async () => {
        const response = await getLabelCounts();
        setLabelCounts(response);
    }

    return (
        <div className="col-span-1 w-full h-full md:max-h-56
        md:top-20 md:sticky md:bg-green-50 md:pl-4 md:pr-4 md:border-solid md:border md:border-green-300 md:rounded-lg">
            <h3 className="text-lg text-center font-bold mb-4 p-2">카테고리 목록</h3>
            <div>
                {
                    labelCounts.map((labelCount, id) =>
                        <CategoryItem key={id} labelCount={labelCount}/>
                    )
                }
            </div>
        </div>
    );
};

interface Props {
    labelCount: LabelCount
}

const CategoryItem = ({labelCount}: Props) => {
    return (
        <Link className="grid grid-cols-8 gap-3 mb-3 hover:opacity-70" to={`/post-list/${labelCount.name}`}>
            <span
                className="col-span-6 rounded inline-block truncate max-w-full text-left font-bold
                md:max-w-full">{labelCount.name}</span>
            <span className="col-span-2 block text-right">{labelCount.count} 개</span>
        </Link>
    );
};


export default Category;