import React, { useState, useContext } from 'react';
import { UserContext } from '../userContext';


export const Simpleform = () => {
    const [users , dispatch] = useContext(UserContext)
   
    const [content, setContent] = useContext(UserContext);
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        dispatch({ type: 'add',
                   name: name,
                   email: email,
                   subject: subject })
    }

    // const addForm = e => {
    //     setContent({...content, 
    //         [e.target.name]: e.target.value
    //      });
    // };

    
    return (
        <div>
            <div>
                {users.name}
            </div>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input 
                    type="text"
                    name="name"
                    onChange={(e) => {setName(e.target.value)}}
                    value = {name}
                    
                />
                <br/>
                <label>email:</label>
                <input 
                    type="text"
                    name="email"
                    onChange={(e) => {setEmail(e.target.value)}}
                    value = {email}
                />
                <br/>
                <label>subject:</label>
                <input 
                    type="text"
                    name="subject"
                    onChange={(e) => {setSubject(e.target.value)}}
                    value = {subject}
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