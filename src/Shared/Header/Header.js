import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import { HashLink } from 'react-router-hash-link';


const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand href="#home">Doctor's Hospital</Navbar.Brand>

                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end ">
                    <Nav.Link className="text-white" as={HashLink} to="/home#home">Home</Nav.Link>
                    <Nav.Link className="text-white" as={HashLink} to="/home#services">Services</Nav.Link>
                    <Nav.Link className="text-white" as={HashLink} to="/home#doctors">Doctors</Nav.Link>
                    {/* {users?.email ? <Button onClick={logOut} variant="light">Logout</Button> :
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>} */}

                    {/* <Navbar.Text>
                        Signed in as: <a href="#login">{users?.displayName && users.displayName}</a>
                    </Navbar.Text> */}
                </Navbar.Collapse>
                <Nav className="me-auto">
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;