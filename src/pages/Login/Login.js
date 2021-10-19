import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';



const Login = () => {
    const { error, setError, processLogin, signInUsingGoogle } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const location = useLocation();
    const redirect_uri = location?.state?.from || '/home';

    const handleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
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
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                history.push(redirect_uri)
            })
            .catch(error => {
                setError('not registered yet,please register to login');
            })

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
                <input className="btn btn-success mt-3" type="submit" value="Sign in" />
            </form>
            <button onClick={handleLogin} className="btn btn-primary  my-3"><i className="fab fa-google me-1"></i> Google sign in</button>
            <p>not registered?<Link to="/register">register</Link></p>
        </div >
    );
};

export default Login;