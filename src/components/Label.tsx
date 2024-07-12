import React from 'react';

interface Props {
    label: Label
}
const Label = ({label}: Props) => {
    const style = {
        backgroundColor: `#${label.color}8c`,
        border: `2px solid #${label.color}`,
    }

    return (
        <span style={style} className="rounded inline-block truncate max-w-32 text-left p-1 mr-2 md:max-w-full">
            {label.name}
        </span>
    );
};

export default Label;