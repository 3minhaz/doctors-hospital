import React from 'react';
import expert1 from '../../../images/expert1.jpg';
import expert2 from '../../../images/expert2.jpg';
import expert3 from '../../../images/expert3.jpg';
import expert4 from '../../../images/expert4.jpg';
const Experts = () => {
    return (
        <div>
            <div className="text-center">
                <h2 className="text-success">Meet Our Team</h2>
                <h1 style={{ color: '#204066' }}>Certified & Experienced Doctors</h1>
                <hr className="w-25 mx-auto border-success" />
            </div>
            <div className="row ms-5 me-2 mb-4">
                <div className="col-md-6 pb-3">
                    <img className="w-75" src={expert1} alt="" />
                    <h4>DR. WILLIAM SMITH</h4>
                    <h6>CEO/ Founder</h6>
                </div>
                <div className="col-md-6 pb-3">
                    <img className="w-75" src={expert2} alt="" />
                    <h4>DR. NOREAIN WALTAR</h4>
                    <h6>Pediatrician</h6>
                </div>
                <div className="col-md-6 pb-3 ">
                    <img className="w-75" src={expert3} alt="" />
                    <h4>DR. NOREAIN WALTAR</h4>
                    <h6>Pediatrician</h6>
                </div>
                <div className="col-md-6 pb-3">
                    <img className="w-50" src={expert4} alt="" />
                    <h4>DR. Symonds BROWN</h4>
                    <h6>Laboratory</h6>
                </div>




            </div>
        </div>
    );
};

export default Experts;