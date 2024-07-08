import React from 'react';

const Image = ({ src, alt, ...props }) => (
    <img
        alt={alt}
        loading="lazy"
        decoding="async"
        data-nimg={1}
        style={{ color: "transparent" }}
        src={src}
        {...props}
    />
);

export default Image;
