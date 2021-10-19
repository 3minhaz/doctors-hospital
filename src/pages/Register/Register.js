import React, { useState } from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { updateProfile, createUserWithEmailAndPassword } from "firebase/auth";
import useAuth from '../../hooks/useAuth';



const Register = () => {
    const { error, setError, auth } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_uri = location?.state?.from || '/home';

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
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                //update profile
                updateProfile(auth.currentUser, { displayName: name })
                    .then(result => {

                    })
                    .catch((error) => {
                        // An error occurred
                        // ...
                    });
                history.push(redirect_uri)

            })
            .catch(error => {
                setError('!!already registered');
            })
        if (password.length < 6) {
            setError('password must be 6 in length')
            return;
        }

    }


    return (
        <div className="w-25 mx-auto mt-5">
            <span className="text-danger">{error}</span>
            <Form onSubmit={handleRegister} >
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control onBlur={handleDisplayName} placeholder="enter your name" required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <p>already registered?<Link to='/login'>click to login</Link></p>
        </div>
    );
};

export default Register;