import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import Button from './Button'

function CardItem(props) {

    console.log("props");

    return(
        <>
            <li className='cards-item'>
                <img src={props.src} alt='Book Image' className='cards-item-img'/>
                <center>
                <h5 className='cards-item-text'>{props.text}</h5>
                <Link to={props.text} className='btn-view'>
                <Button buttonStyle='btn--outline' buttonSize='btn--medium'>View</Button></Link></center>
            </li>
        </>
    )
}

export default CardItem