import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function MyBooks() {

    const[savedBooks, setSavedBooks] = useState([]);
    const user = JSON.parse(sessionStorage.getItem("user"));
    const userid = (user[0].userId);

    const getSavedBooks = () => {
        fetch(`http://localhost:3500/getSavedBooks/${userid}`, {
            method: 'GET',
        }).then(res=>{
            return res.json();
        }).then(data => {
            setSavedBooks(data);
        })}

    useEffect(() => {
        getSavedBooks();
    }, [])

    console.log(savedBooks);

    return (
        <>
            {savedBooks.map((book) => (
                <center class="center">
                <Link to ={ `/summary/${book.bookid}`}>
                <p>{book.title}</p>
                </Link>
                </center>
            ))}
        </>
    )
}

export default MyBooks
