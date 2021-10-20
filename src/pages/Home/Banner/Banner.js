import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner1.jpg';
import banner2 from '../../../images/banner2.jpg';
import banner3 from '../../../images/banner3.jpg';

const Banner = () => {
    return (
        <div id="banner">
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100 img-fluid"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Just Make An Appointment</h3>
                        <p>Get The Right Care Book With Your Doctors!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Tooth Protection</h3>
                        <p>There are only 2 dental specialties that only focus on dental esthetics: Prosthodontics and Orthodontics</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Cosmetic Dentistry</h3>
                        <p>There are only 2 dental specialties that only focus on dental esthetics: Prosthodontics and Orthodontics</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;