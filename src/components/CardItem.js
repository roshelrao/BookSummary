import React from 'react'
import Button from './Button'

function CardItem(props) {
    return(
        <>
            <li className='cards-item'>
                <img src={props.src} alt='Book Image' className='cards-item-img'/>
                <center>
                <h5 className='cards-item-text'>{props.text}</h5>
                <Button buttonStyle='btn--outline' buttonSize='btn--medium'>View</Button></center>
            </li>
        </>
    )
}

export default CardItem