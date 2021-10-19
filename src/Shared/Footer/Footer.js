import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className="row p-5 mx-1 bg-black text-white ">
                <div className="col-md-4 ">
                    <li>about</li>
                    <li>Open Hours</li>
                    <li>Mn – St: 8:00am – 9:00pm Sn: Closed</li>
                </div>
                <div className="col-md-4">
                    <li>Our Address</li>
                    <li>528 tenth Avenue, Boston, BT 58965</li>
                    <li></li>
                </div>
                <div className="col-md-4">
                    <li>Contact Us</li>
                    <li>Don not hesitate to contact Us!</li>
                    <li></li>
                </div>
            </div>
        </div>
    );
};

export default Footer;