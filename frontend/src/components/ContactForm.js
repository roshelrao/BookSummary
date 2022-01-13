import React from 'react';
import '../App.css';
import Button from './Button';
import './ContactForm.css';

function ContactForm(){
    return(
        <>
        <h1> Contact Us</h1>
            <form>
                <label>Name: 
                    <input type="text" name="name"></input>
                </label>
                <label>Email: 
                    <input type="text" name="email"></input>
                </label>
                <label>Message: 
                    <textarea></textarea>
                </label>
                <Button buttonStyle='btn--outline' buttonSize='btn--large'>Submit</Button>
            </form>
        </>
    )
}

export default ContactForm