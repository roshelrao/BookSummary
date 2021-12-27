import React from 'react'
import { Link } from 'react-router-dom'
import './Button.css'

const STYLES = ['btn--primary'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
    children,
    type,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) 
    ?buttonStyle 
    :STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize)
    ?buttonSize
    :SIZES[0];

    return(
        <Link to='/view-book' className='btn-view'>
            <button 
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            type={type}
            >
                {children}
            </button>
        </Link>
    )
}

export default Button