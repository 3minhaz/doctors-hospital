import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Details = () => {
    const { id } = useParams();
    const [details, setDetails] = useState([]);
    const [singleId, setSingleId] = useState({});
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])

    const newId = parseInt(id);
    useEffect(() => {
        const foundDetail = details.find(detail => detail.id === newId)
        setSingleId(foundDetail);
    }, [details])



    return (

        <div className="w-50 mx-auto">

            <h1>id:{singleId?.id}</h1>
            <img className="w-75" src={singleId?.img} alt="" />
            <h2>{singleId?.serviceName}</h2>
            <p>{singleId?.details}</p>

        </div>
    );
};

export default Details;