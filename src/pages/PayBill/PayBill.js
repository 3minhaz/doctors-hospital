import React from 'react';

const PayBill = () => {
    return (
        <div className="my-5" >
            <h1 className="ms-5">How to Pay Your Medical Bill</h1>
            <p className="ms-5">This section explains how to pay your bill from any Doctors Medical Medicine care facility. For your convenience, your professional physician charges and hospital-based facility charges come on a single billing statement that will show your cost share for the services you received. You will not get a bill if the insurance has covered the full cost of  the services.</p>
            <div style={{ backgroundColor: "#f5f5f5", borderRadius: "10px" }} className="row text-center m-5 p-3">
                <h1 className="text-center mb-5">Pay your bill</h1>
                <div className="col-md-4">
                    <h3>Online Through MyChart</h3>
                    <p>You can pay your bill online through your MyChart account. If you don’t have one, ask about it during your next appointment.</p>
                </div>
                <div className="col-md-4">
                    <h3>By Phone</h3>
                    <p>Call 1-855-662-3017 and select option 1 if you have questions about your bill or information changes.</p>
                </div>
                <div className="col-md-4">
                    <h3>By Mail</h3>
                    <p>​Use the coupon at the bottom of your statement and mail it to us.</p>
                </div>

            </div>
        </div>
    );
};

export default PayBill;