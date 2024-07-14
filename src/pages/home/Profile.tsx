import React from 'react';
import data from '../../assets/data.json';

const Profile = () => {
    return (
        <div>
            <h1 className="text-2xl text-center m-8 font-bold md:text-left">Hello world!</h1>
            <div className="text-lg flex flex-col items-center text-center md:flex-row md:text-left md:justify-center">
                <div className="profile__image mb-3 md:mb-0 md:mr-10"/>
                <div className="flex flex-col">
                    <span className="mb-3 font-bold text-xl md:mb-3">{data.profile.name.ko} ({data.profile.name.nickname})</span>
                    <span className="mb-2">{data.profile.introduction}</span>
                    <span className="mb-2">{data.profile.work}</span>
                    <a target="_blank" href={data.profile.links.youtube.url}
                       rel="noreferrer">
                        <span className="profile__youtube">YT</span>{" "}
                        {data.profile.links.youtube.title}</a>
                </div>
            </div>
        </div>
    );
};

export default Profile;