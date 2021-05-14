import React, { createContext, useReducer, useEffect} from 'react'

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

const [users, dispatch] = useReducer((state, action) => {
    switch (action.type) {
        case 'add':
            return {
                ...state,
                ///
            };
        case 'minus':
            return {
                state
            }
        default: 
            return state;
    }
})

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            dispatch({
                type: 'add',
                user
            })
        })
            
            return unsubscribe
        }, [])

        const value = {
            users,
            signup
        }



    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}
