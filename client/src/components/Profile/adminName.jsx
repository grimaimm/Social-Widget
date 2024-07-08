import React from 'react';

const AdminName = ({ name, location, pronouns }) => (
    <div className="pt-5 px-8">
        <div
            className="flex flex-col justify-center items-center space-y-3 flip-in-hor-bottom-v2"
        >
            <div className="flex flex-col gap-1 items-center text-center">
                <h1 className="lg:text-2xl text-2xl font-medium">{name}</h1>
                <div className="flex gap-2 text-[15px] text-neutral-500">
                    <span>{location}</span>
                    <span className="text-neutral-300">•</span>
                    <span>{pronouns}</span>
                </div>
            </div>
        </div>
    </div>
);

export default AdminName;
