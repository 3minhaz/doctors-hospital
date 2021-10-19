import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { registerNewUser, error, setError, processLogin, signInUsingGoogle } = useFirebase()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handlePassword = e => {
        setPassword(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value)
    }
    const handleSignIn = e => {
        e.preventDefault();
        console.log(email, password);
        if (password.length < 6) {
            setError('password must be 6 in length')
            return;
        }
        processLogin(email, password)

    }
    return (


        <div className="text-center" >
            <h2>Log in</h2>
            <span className="text-danger">{error}</span>
            <br />
            <form onSubmit={handleSignIn}>

                <input onBlur={handleEmailChange} className="mb-2" type="email" name="" id="" required />
                <br />
                <input onBlur={handlePassword} type="password" name="" id="" required />
                <br />
                <input type="submit" value="sign in" />
            </form>
            <button onClick={signInUsingGoogle} className="btn btn-warning my-3">Google sign in</button>
            <p>not registered?<Link to="/register">register</Link></p>
        </div >
    );
};

export default Login;