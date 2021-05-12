import React, { createContext, useReducer, useState } from 'react'

export const UserContext = createContext();

export const UserProvider = props => {

const [users, dispatch] = useReducer((state, action) => {
    switch (action.type) {
        case 'add':
            return [
                ...state,
                {
                    id: state.length,
                    name: 'action.name',
                    email: action.email,
                    channel: action.channel
                }
            ];
        default: 
            return state;
    }
})
  const [content, setContent] = useState({
  });

    return (
        <UserContext.Provider value={[content, setContent, users, dispatch ]}>
            {props.children}
        </UserContext.Provider>
    )
}
