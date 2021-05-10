import React, { useState, useContext } from 'react';
import { UserContext } from '../userContext';


export const Simpleform = () => {
    const {six, dispatch} = useContext(UserContext)
    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');
    // const [email, setEmail] = useState('');
    const [name, setName] = useContext(UserContext);

    // const handleSubmit = e => {
    //     e.preventDefault()
    //     dispatch({ type: 'increment', value: welcome })
    // }

    const addForm = e => {
        setName({...name, 
            [e.target.name]: e.target.value
         });
    };

    
    return (
        <div>
            <div>Count - {six}</div>
            <form>
                <label>firstName:</label>
                <input 
                    type="text"
                    name="firstName"
                    onChange={addForm}
                    value = {name.firstName}
                    
                />
                <br/>
                <label>lastName:</label>
                <input 
                    type="text"
                    name="lastName"
                    onChange={addForm}
                    value = {name.lastName}
                />
                <br/>
                <label>email:</label>
                <input 
                    type="text"
                    name="email"
                    onChange={addForm}
                    value = {name.email}
                />
                <button>welcome</button>
            </form>

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