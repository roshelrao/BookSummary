import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Button from './Button';

function LoginForm(){

    const[result, setResult] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const pass = event.target.pass.value;


        if(email === "" || pass === ""){
            alert("Please fill all the details");
        }else{
        fetch('http://localhost:3500/login',{
            method:'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({"email": email, "pass":pass})
        }).then(res => {
            return res.json();
        }).then(data => {
            setResult(data);
        })}

        console.log(result);

        if(result.length == 0){
            alert("Invalid username and password");
        }else{
            localStorage.setItem('user', JSON.stringify(result));
            window.location = '/';
        }
        
    }

    return(
        <>
            <h1> Login</h1>
                <form onSubmit={handleSubmit}>
                    <label>Email: 
                        <input type="text" name="email"></input>
                    </label>
                    <label>Password: 
                        <input type="password" name="pass"></input>
                    </label>
                    <Link to ='/register'><a>Dont't have an account? Register now!</a> </Link><br></br>
                    <Button buttonStyle='btn--outline' buttonSize='btn--large'>Login</Button>
                </form>
        </>
    )

}

export default LoginForm