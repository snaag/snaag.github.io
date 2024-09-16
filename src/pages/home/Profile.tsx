import React from 'react';
import data from '../../assets/data.json';

const Profile = () => {
    return (
        <div>
            <h1 className="text-2xl text-center mb-8 font-bold md:text-left">Hello world!</h1>
            <div className="text-lg items-center text-center grid grid-cols-1 md:grid-cols-3 md:text-left">
                <div className="profile__image__outer md:mb-0 md:mr-10">
                    <div className="profile__image mb-3"/>
                </div>
                <div className="flex flex-col col-span-2">
                    <span className="mb-4 font-bold text-xl">{data.profile.name.ko} ({data.profile.name.nickname})</span>
                    <span className="mb-3">{data.profile.introduction}</span>
                    <span className="mb-3">{data.profile.work}</span>
                    <a target="_blank" href={data.profile.links.youtube.url}
                       rel="noreferrer">
                        <span className="profile__youtube">유튜브</span>{" "}
                        {data.profile.links.youtube.title}</a>
                </div>
            </div>
        </div>
    );
};

export default Profile;