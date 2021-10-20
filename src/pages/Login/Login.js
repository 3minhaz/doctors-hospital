import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import google from '../../images/Google-removebg-preview.png';



const Login = () => {
    const { error, setError, processLogin, signInUsingGoogle, setIsLoading } = useAuth();
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
            .finally(() => setIsLoading(false))
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
            .finally(() => setIsLoading(false))
            .catch(error => {
                setError('not registered yet,please register to login');
            })

    }
    return (


        <div className="text-center" >
            <h2 className="mt-3">Log in</h2>
            <span className="text-danger">{error}</span>
            <br />
            <form onSubmit={handleSignIn}>

                <input onBlur={handleEmailChange} className="mb-2" type="email" name="" id="" required />
                <br />
                <input onBlur={handlePassword} type="password" name="" id="" required />
                <br />
                <input className="btn btn-success mt-3" type="submit" value="Sign in" />
            </form>
            <button onClick={handleLogin} className="btn btn-white border border-2 my-3"> <span><img height="25px" src={google} alt="" /></span> Login with Google</button>
            <p>Not registered? <Link className="text-decoration-none" to="/register">Click to Register</Link></p>
        </div >
    );
};

export default Login;