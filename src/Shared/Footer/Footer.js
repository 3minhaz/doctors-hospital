import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { } from '@fortawesome/free-solid-svg-icons'



const Footer = () => {
    return (
        <div>
            <div style={{ backgroundColor: "#50626f" }} className="row p-5 mx-1  text-white ">
                <div className="col-md-4 ">
                    <h5 className="pb-4">Latest news & tips</h5>
                    <p>Patients & Visitors</p>
                    <p>Medical Services and Care</p>
                    <p>Community Health</p>
                </div>
                <div className="col-md-4 ">
                    <h5 className="pb-4">Contact us</h5>
                    <div>
                        <small>Sundays @ 10:00am</small><br />
                        <small>London, UK</small><br />
                        <small>10, Firs Avenue, Muswell Hill,</small>
                    </div>
                    <div>
                        <small>Tel: 02 562-958 , </small>
                        <small>Mobile: 02 562-95</small><br />
                        <small>10, Firs Avenue, Muswell Hill,</small>
                    </div>
                </div>
                <div className="col-md-4 ">
                    <h5 className="pb-4">Stay Connected</h5>
                    <p>facebook </p>
                    <p>Twitter</p>
                    <p>Google+</p>
                </div>

            </div>
        </div>
    );
};

export default Footer;