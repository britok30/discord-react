import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css';
import Logo from '../../assets/images/logo.svg';

const Login = () => {
    const signIn = () => {
        //sign In
    };

    return (
        <div className="login">
            <div className="login__container">
                <div className="login__logo">
                    <img src={Logo} alt="logo" />
                </div>
                <h3 className="login__title">Welcome Back!</h3>
                <p className="login__subtext">
                    We're so excited to see you again!
                </p>

                <form className="login__form">
                    <Button className="login__button" onClick={signIn}>
                        Login
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default Login;
