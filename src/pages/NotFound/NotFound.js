import React from 'react';
import img from '../../images/404.jpg';

const NotFound = () => {
    return (
        <div className="text-center my-5">
            <h2>404!!page not found</h2>
            <img src={img} alt="" />
        </div>
    );
};

export default NotFound;