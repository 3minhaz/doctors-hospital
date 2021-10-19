import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    return (
        <div className="my-5 py-5">
            <h1 className="mb-5 text-center">Contact Info</h1>
            <div className="row mx-4">
                <div className="col-md-6">
                    <p>A hospital is a health care institution providing patient treatment with specialized medical and nursing staff and medical equipment.[1] The best-known type of hospital is the general hospital, which typically has an emergency department to treat urgent health problems ranging from fire and accident victims to a sudden illness.</p>
                </div>
                <div className="col-md-6">
                    <div className="d-flex">
                        <h6 className="me-2"><FontAwesomeIcon className="me-2 fa-lg " icon={faAddressCard} />ADDRESS:</h6>
                        <p>  London, UK
                            10, Firs Avenue, Muswell Hill,</p>
                    </div>
                    <div className="d-flex">
                        <h6 className="me-2"><FontAwesomeIcon className="me-2 fa-lg " icon={faPhone} />Phone:</h6>
                        <p> 02 562-958 </p>
                    </div>
                    <div className="d-flex">
                        <h6 className="me-2"><FontAwesomeIcon className="me-2 fa-lg " icon={faEnvelope} />Email:</h6>
                        <p>doctorshospital@hospital.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;