import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './Summary.css'

function Summary(props) {

    // const bookId = this.props.match.params.id;
    const { id } = useParams();
    console.log(id);

    const[bookSummary, setBookSummary] = useState([]);

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
    
    return (
        <>
            {bookSummary.map((summary) => (
                <h1>{summary.title}</h1>
            ))}

            {bookSummary.map((summary) => (
                <p>{summary.description}</p>
            ))}
        </>
    )
}

export default Summary
