import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Categories() {

    const[getAllBooks, setGetAllBooks ] = useState([]);

    const getBooks = () => {
        fetch('http://localhost:3500/getBooks', {
            method:'GET'
        }).then(res => {
            return res.json();
        }).then(data => {
            setGetAllBooks(data);
        })
    }

    useEffect(() => {
       getBooks();
    }, [])

    return (
        <>
            <h1>All books</h1>

            {getAllBooks.map((book) => (
                <center><Link to={`/summary/${book.bookId}`}>{book.title}</Link></center>
            ))}
        </>
    )
}

export default Categories
