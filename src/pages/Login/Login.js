import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { signInUsingGoogle } = useFirebase();
    return (
        <div className="text-center">
            <h2>Log in</h2>
            <input className="mb-2" type="email" name="" id="" />
            <br />
            <input type="password" name="" id="" />
            <br />
            <button onClick={signInUsingGoogle} className="btn btn-warning my-3">Google sign in</button>
            <p>not registered?<Link to="/register">register</Link></p>
        </div>
    );
};

export default Login;