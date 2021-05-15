import React from 'react';
import '../index.css'

const TextError = (props) => {
    return (
        <div className='error'>
            {props.children}
        </div>
    )
}

export default TextError
