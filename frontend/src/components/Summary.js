import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import './Summary.css'
import Button from './Button';

function Summary(props) {

    // const bookId = this.props.match.params.id;
    const { id } = useParams();
    //console.log(id);

    const[bookSummary, setBookSummary] = useState([]);
    const[savedStatus, setSavedStatus] = useState("Save");

    const getBookSummary=() => {
        fetch(`http://localhost:3500/books/${id}`,{
            method:'GET',
        }).then(res => {
            return res.json();
        }).then(data => {
            setBookSummary(data);
        })
    }

    useEffect(() => {
        getBookSummary();
    }, [])

    const checkLogin = () => {

        const user = JSON.parse(localStorage.getItem("user"));
        const userid = (user[0].userId);

        if("user" in localStorage){
            // fetch('/saveBook', {
            //     method:'POST',
            //     headers: {'Content-Type': 'application/json'}, 
            //     body: JSON.stringify({"bookid":id, "userid":userid})
            // })
            alert("Book Saved");
            setSavedStatus("Saved");
        }else{
            alert("Please login to save the summary!");
            window.location = '/login';
        }
    }
    
    return (
        <>
            {bookSummary.map((summary) => (
                <h1>{summary.title}</h1>
            ))}

            <center class="center">
                <Button buttonStyle='btn--outline' buttonSize='btn--medium' onClick={checkLogin}>{savedStatus}</Button>
            </center>

            {bookSummary.map((summary) => (
                <p>{summary.description}</p>
            ))}
        </>
    )
}

export default Summary
