import React from 'react';
import Banner from '../Banner/Banner';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';
import SpecialCare from '../SpecialCare/SpecialCare';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <SpecialCare></SpecialCare>
            <Experts></Experts>
        </div>
    );
};

export default Home;