import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Button from './Button';
import Login from './pages/Login';

function RegisterForm(){

    const handleSubmit = (event) => {
        event.preventDefault();
    
        const fname = event.target.fname.value; 
        const lname = event.target.lname.value; 
        const email = event.target.email.value; 
        const pass = event.target.pass.value; 
    
        if(fname === "" || lname === "" || email === "" || pass === ""){
            alert("Please fill all the details");
        }else{
        fetch('http://localhost:3500/register', {
            method:'POST',
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify({"fname":fname, "lname":lname, "email":email, "pass":pass})
        }).then(res => {
            console.log("User added");
            alert("Registration Complete!")
            window.location = '/login';
        });
        }
    }
    
    return(
        <>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <label>First Name: 
                        <input type="text" name="fname"></input>
                </label>
                <label>Last Name: 
                        <input type="text" name="lname"></input>
                </label>
                <label>Email: 
                    <input type="text" name="email"></input>
                </label>
                <label>Password: 
                    <input type="password" name="pass"></input>
                </label>
                <Link to = '/login'>Already have an account?</Link><br></br>
                <Button buttonStyle='btn--outline' buttonSize='btn--large'>Register</Button>
            </form>
        </>
    )
}

export default RegisterForm;