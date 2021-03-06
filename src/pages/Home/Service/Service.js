import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, img, serviceName, details } = service;
    return (
        <div className="col-md-4 col-sm-12 p-2 mb-5 border ">
            <div className="gx-2">
                <img className="w-100 h-75" src={img} alt="" />
                <h3 className="mt-2">{serviceName}</h3>
                <p>{details.slice(0, 80)}..</p>
                <button className="btn btn-success "><Link className="text-white text-decoration-none" to={`/services/${id}`}>Details</Link></button>
            </div>
        </div>
    );
};

export default Service;