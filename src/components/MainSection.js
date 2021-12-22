import React from 'react'
import '../App.css'
import './MainSection.css'

function MainSection() {
    return(
        <>
        <div className='main-section-container'>
        <img src='/images/books.jpg'/>
        <div className='main-section-text'>
        <h1>No time to read books?</h1>
        <p>BookSummary summarizes any book into a one page document which will contain all the important points in the book you want to read.</p>
        </div>
        </div>
        <div className='most-popular-section'>
            <p>Most popular books</p>
        </div>
        </>
    )
}

export default MainSection