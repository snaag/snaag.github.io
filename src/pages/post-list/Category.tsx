import React, {useState} from "react";
import {Link} from "react-router-dom";
import {getLabelCounts} from "../../apis/post";

const Category = () => {
    const [labelCounts, setLabelCounts] = useState<LabelCount[]>([]);

    (async () => {
        const response = await getLabelCounts();
        setLabelCounts(response);
    })();

    return (
        <div className="col-span-1 w-full h-full md:max-h-56
        md:top-20 md:sticky md:bg-green-300 md:pl-4 md:pr-4 md:border-solid md:border md:rounded-lg">
            <h3 className="text-lg text-center font-bold m-4">카테고리 목록</h3>
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
        <Link className="grid grid-cols-7 gap-3 mb-3" to={`/post-list/${labelCount.name}`}>
            <span
                className="col-span-6 rounded inline-block truncate max-w-full text-left font-bold
                md:max-w-full">{labelCount.name}</span>
            <span className="col-span-1 block text-right">{labelCount.count}</span>
        </Link>
    );
};


export default Category;