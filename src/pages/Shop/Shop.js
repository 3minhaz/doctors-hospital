import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Shop = () => {
    return (
        <div>
            <h2 className="text-center my-3">Medical center</h2>
            <Row xs={1} md={3} className="g-4 m-4">
                <Col>
                    <Card>
                        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ64xi1OHDbbGaYjzGrT1urqnUnsQDwEaabCg&usqp=CAU" />
                        <Card.Body>
                            <Card.Title>Anticavity Toothpaste</Card.Title>
                            <Card.Text>
                                Anticavity toothpaste. regular brushing with flouride toothpaste helps protect teeth againts builds increasing protection against painful sensitivity of teeth due to cold, heat, acids, sweets or contact. aids in the prevention of dental cavities.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" className="w-100 h-50" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk4zQcspCEfoCFbDQgdau65pWd51N3weiafRGUhYkdsG5sHKw0kfxX9suA5xHaPd3tj7Y&usqp=CAU" />
                        <Card.Body>
                            <Card.Title>Compact Dental Floss</Card.Title>
                            <Card.Text>
                                Anticavity toothpaste. regular brushing with flouride toothpaste helps protect teeth againts builds increasing protection against painful sensitivity of teeth due to cold, heat, acids, sweets or contact. aids in the prevention of dental cavities.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" className="w-100 h-125" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOy5Huft1BqBcrH_Wri-zZwaD39T9tR4pplA&usqp=CAU" />
                        <Card.Body>
                            <Card.Title>Electric Toothbrush</Card.Title>
                            <Card.Text> Best for beginners: Oral-B Pro 1000 Electric Toothbrush.Most brush heads: Philips Sonicare ProtectiveClean 4100.Best budget: Arm & Hammer Spinbrush Pro Clean.Best for sensitive teeth: Brightline Sonic Rechargeable Toothbrush.Best for sensitive gums: PRO-SYS VarioSonic Electric Toothbrush.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Shop;