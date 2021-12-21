import React from 'react'
import { Link } from 'react-router-dom'

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
        <Link to='/sign-up' className='btn-mobile'>
            <button 
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}
            >
                {children}
            </button>
        </Link>
    )
}
