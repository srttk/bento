import React from 'react';

const Banner = ({ title = "" }) => {
    return (
        <h1 className="title">
            {title}
        </h1>
    );
}

export default Banner;
