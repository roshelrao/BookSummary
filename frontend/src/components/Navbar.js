import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {

    return (
        <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <ul className='nav-menu'>
                <Link to='/' className='nav-item'>
                    Home
                </Link>
                <Link to='/categories' className='nav-item'>
                    Categories
                </Link>
                <Link to='/' className='nav-item' id='nav-logo'>
                    BookSummary
                </Link>
                <Link to='/login' className='nav-item'>
                    Login
                </Link>
                <Link to='/contact' className='nav-item'>
                    Contact
                </Link>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default Navbar

 