import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

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
                <h1>{summary.description}</h1>
            ))}
        </>
    )
}

export default Summary
