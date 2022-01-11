import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Button from './Button';
import Login from './pages/Login';

function RegisterForm(){
    return(
        <>
            <h1>Register</h1>
            <form>
                <label>First Name: 
                        <input type="text" name="email"></input>
                </label>
                <label>Last Name: 
                        <input type="text" name="email"></input>
                </label>
                <label>Email: 
                    <input type="text" name="email"></input>
                </label>
                <label>Password: 
                    <input type="password" name="email"></input>
                </label>
                <Link to = '/login'><a>Already have an account?</a> </Link><br></br>
                <Button buttonStyle='btn--outline' buttonSize='btn--large'>Register</Button>
            </form>
        </>
    )
}

export default RegisterForm;