import React, { useState } from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { updateProfile, createUserWithEmailAndPassword } from "firebase/auth";
import useAuth from '../../hooks/useAuth';



const Register = () => {
    const { error, setError, auth, setIsLoading, logout } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_uri = location?.state?.from || '/login';

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    //taking password from user
    const handlePassword = e => {
        setPassword(e.target.value);
    }
    //taking usern email from user
    const handleEmailChange = e => {
        setEmail(e.target.value)
    }

    //taking user name 
    const handleDisplayName = e => {
        setName(e.target.value)
    }

    //register new user
    const handleRegister = e => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;

                logout();
                setError('successfully register,please login');
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
            .finally(setIsLoading(false))
            .catch(error => {
                setError('!!already registered, please login');
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
            <p>Already registered? <Link className="text-decoration-none" to='/login'>Click to login</Link></p>
        </div>
    );
};

export default Register;