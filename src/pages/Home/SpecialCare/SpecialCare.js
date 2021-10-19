import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './SpecialCare.css';

const SpecialCare = () => {
    return (
        <div className="card-bg-color p-5 mt-4">
            <h1 className="text-center mb-4 text-white">Special Care</h1>
            <Row xs={1} md={3} className="g-4">

                <Col >
                    <Card className="card-height">

                        <Card.Body>
                            <Card.Title>Emergency Care</Card.Title>
                            <Card.Text>
                                If you are experiencing an emergency, dial 911. The emergency entrance of our Hospital is located next to the front entrance of the hospital, located at 1800 Orleans Street.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col >
                    <Card className="card-height">

                        <Card.Body >
                            <Card.Title>Primary Care</Card.Title>
                            <Card.Text>
                                Whether you need treatment for a minor illness or chronic condition, our primary care physicians are ready to help.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col >
                    <Card className="card-height">

                        <Card.Body>
                            <Card.Title>Speciality care</Card.Title>
                            <Card.Text>
                                The Johns Hopkins Hospital offers a variety of specialty care services from prevention to surgery.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col >
                    <Card className="card-height">

                        <Card.Body>
                            <Card.Title>Speciality care</Card.Title>
                            <Card.Text>
                                The Johns Hopkins Hospital offers a variety of specialty care services from prevention to surgery.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col >
                    <Card className="card-height">

                        <Card.Body>
                            <Card.Title>Speciality care</Card.Title>
                            <Card.Text>
                                The Johns Hopkins Hospital offers a variety of specialty care services from prevention to surgery.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </div>
    );
};

export default SpecialCare;