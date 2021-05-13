import React, { createContext, useReducer} from 'react'

export const UserContext = createContext();

export const UserProvider = props => {

const [users, dispatch] = useReducer((state, action) => {
    switch (action.type) {
        case 'add':
            return {
                ...state,
                name:action.name,
                email:action.email,
                channel: action.channel,
            };
        case 'minus':
            return {
                state
            }
        default: 
            return state;
    }
})


    return (
        <UserContext.Provider value={[ users, dispatch ]}>
            {props.children}
        </UserContext.Provider>
    )
}
