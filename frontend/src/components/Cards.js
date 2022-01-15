import React, {useState, useEffect} from "react"
import CardItem from "./CardItem"
import './Cards.css'

function Cards() {

    const [bookList, setBookList] = useState([]);

    const getBooks = () =>{
        fetch('http://localhost:3500/getBooks', {
            method:'GET',
        }).then(res => {
           return res.json();
        }).then(data => {
            setBookList(data);
        });
    }

    useEffect(() => {
        getBooks();
    }, []) 

    //console.log(bookList);
 
    return(
        <div className='cards'>
                {bookList.map((book,) => (
                <CardItem
                src= '/images/books.jpg'
                text={book.title}/>
                ))}
        </div> 
    )
}

export default Cards