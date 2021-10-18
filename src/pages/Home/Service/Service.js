import React from 'react';

const Service = ({ service }) => {
    const { id, img, serviceName, details } = service;
    return (
        <div className="col-md-4 col-sm-12 p-2 mb-3  ">
            <img className="w-100 h-75" src={img} alt="" />
            <h3 className="mt-2">{serviceName}</h3>
            <p>{details.slice(0, 80)}..</p>
        </div>
    );
};

export default Service;