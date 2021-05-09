import React, { useState, useContext } from 'react';
import { UserContext } from '../userContext';


export const Simpleform = () => {
    const [name, setName, six, dispatch] = useContext(UserContext)
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const addForm = e => {
        e.preventDefault();
        setName([ firstName, lastName,  email ]);
    }

    
    return (
        <div>
            <div>Count - {six}</div>
            <form onSubmit={addForm}>
                <label>firstName:</label>
                <input 
                    type="text"
                    name="firstname"
                    onChange={e => setFirstName(e.target.value)}
                    value = {firstName}
                    
                />
                <br/>
                <label>lastName:</label>
                <input 
                    type="text"
                    name="lastname"
                    onChange={e => setLastName(e.target.value)}
                    value = {lastName}
                />
                <br/>
                <label>email:</label>
                <input 
                    type="text"
                    name="email"
                    onChange={e => setEmail(e.target.value)}
                    value = {email}
                />
                <button>welcome</button>
            </form>
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