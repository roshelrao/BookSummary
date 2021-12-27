import React from "react"
import CardItem from "./CardItem"
import './Cards.css'

function Cards() {
    return(
        <div className='cards'>
            <ul className='cards-items'>
                <CardItem
                src='/images/books.jpg'
                text="101 essays that will change the way you think"/>
                <CardItem
                src='/images/books.jpg'
                text="101 books that will change your life"/>
                <CardItem
                src='/images/books.jpg'
                text="101 books that will change your life"/>
            </ul>
            <ul className='cards-items'>
                <CardItem
                src='/images/books.jpg'
                text="101 books that will change your life"/>
                <CardItem
                src='/images/books.jpg'
                text="101 books that will change your life"/>
                <CardItem
                src='/images/books.jpg'
                text="101 books that will change your life"/>
            </ul>
        </div> 
    )
}

export default Cards