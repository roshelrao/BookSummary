import React from 'react';
import '../App.css';
import Button from './Button';

function LoginForm(){
    return(
        <>
            <h1> Login</h1>
                <form>
                    <label>Email: 
                        <input type="text" name="email"></input>
                    </label>
                    <label>Password: 
                        <input type="password" name="pass"></input>
                    </label>
                    <a href='{Home}'>Dont't have an account? Register now!</a> <br></br>
                    <Button buttonStyle='btn--outline' buttonSize='btn--large'>Login</Button>
                </form>
        </>
    )

}

export default LoginForm