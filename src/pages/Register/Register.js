import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import { getAuth, updateProfile } from "firebase/auth";
import useAuth from '../../hooks/useAuth';



const Register = () => {
    const { registerNewUser, error, setError } = useAuth();
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handlePassword = e => {
        setPassword(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value)
    }
    const handleDisplayName = e => {
        setName(e.target.value)
    }
    const handleRegister = e => {
        e.preventDefault();
        console.log(email, password);
        if (password.length < 6) {
            setError('password must be 6 in length')
            return;
        }
        registerNewUser(email, password, name);
        // userName();
    }


    return (
        <div className="w-25 mx-auto mt-5">
            <span className="text-danger">{error}</span>
            <Form onSubmit={handleRegister} >
                {/* <Row className="mb-3"> */}
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required />
                </Form.Group>
                {/* </Row> */}

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control onBlur={handleDisplayName} placeholder="enter your name" required />
                </Form.Group>
                {/* 
                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}

                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <p>already registered?<Link to='/login'>click to login</Link></p>
        </div>
    );
};

export default Register;