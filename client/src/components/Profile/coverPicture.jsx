import React from 'react';

const CoverPicture = ({ src }) => (
  <div
    className="w-full h-40 md:h-44 md:rounded-t-xl bg-cover puff-in-hor"
    style={{
        backgroundImage: `url(${src}), url(${src})`,
        backgroundPosition: "center 50%"
    }}
  />
);

export default CoverPicture;