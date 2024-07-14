import React from 'react';

interface Props {
    references: string[]
}

const getHostname = (givenUrl: string) => {
    return new URL(givenUrl).hostname;
}

const getPathname = (givenUrl: string) => {
    return new URL(givenUrl).pathname;
}

const Reference = ({references}: Props) => {


    return (
        <>
            {
                references.length > 0 &&
                <h2 className="text-xl font-bold underline text-center m-3 md:text-3xl">Reference</h2>
            }
            {
                references.length > 0 &&
                references.map((reference, id) =>
                    <a
                        key={id} href={reference} target="_blank" rel="noreferrer"
                        className="block mb-4 cursor-pointer p-1 truncate italic hover:opacity-70"
                    >
                        <span className="font-bold">{getHostname(reference)}</span>
                        <span className="opacity-40">{getPathname(reference)}</span>
                    </a>
                )
            }
        </>
    );
};

export default Reference;