import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import { HashLink } from 'react-router-hash-link';
import useFirebase from '../../hooks/useFirebase';


const Header = () => {
    const { user, logout } = useFirebase();
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand as={Link} to="/home">Doctor's Hospital</Navbar.Brand>

                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end ">
                    <Nav.Link className="text-white" as={HashLink} to="/home#banner">Home</Nav.Link>
                    <Nav.Link className="text-white" as={HashLink} to="/home#services">Services</Nav.Link>
                    <Nav.Link className="text-white" as={Link} to="/appoinment">Appoinment</Nav.Link>
                    <Nav.Link className="text-white" as={Link} to="/shop">Shop</Nav.Link>
                    {!user.email && <Nav.Link className="text-white" as={Link} to="/login">Login</Nav.Link>}
                    {user?.email ? <Button onClick={logout} variant="light me-2">Logout </Button> :
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>}

                    <Navbar.Text>
                        <a href="#login">{user?.email && user.displayName}</a>
                    </Navbar.Text>
                </Navbar.Collapse>
                <Nav className="me-auto">
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;