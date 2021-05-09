import React, { useState, useContext } from 'react';
import { UserContext } from '../userContext';


export const Simpleform = () => {
    const [name, setName, six, dispatch] = useContext(UserContext)

    
    return (
        <div>
            <div>Count - {six}</div>
            <input type="text" onChange={e => setName(e.target.value)} />
            <button onClick={() => dispatch({ type: 'increment', value: name })}>
                increment
            </button>
            <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>
                Decrement
            </button>
            <button onClick={() => dispatch({ type: 'reset', value: 1 })}>
                Reset
            </button>

        </div>
    )
}

export default Simpleform