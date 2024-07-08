import React from 'react';
import Image from './image';

const PhotoProfile = () => (
    <div
        className="rounded-full bg-white border-2 -mt-[60px] scale-in-center"
    >
        <div className="overflow-hidden rounded-full">
            <Image
                alt="Muhammad Rahim"
                width={120}
                height={120}
                className="duration-700 ease-in-out scale-100 blur-0 grayscale-0 rounded-full lg:hover:scale-105"
                src="/images/profileImage.jpg"
            />
        </div>
    </div>
);

export default PhotoProfile;
