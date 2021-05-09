import React, { createContext, useReducer, useState } from 'react'

export const UserContext = createContext();

export const UserProvider = props => {

const initialState = {
    firstCounter: ''
  }
  
  const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { firstCounter: action.value }
        case 'decrement':
            return { firstCounter: state.firstCounter - action.value }
        case 'reset':
            return initialState
        default:
            return state
    }
  }
  const [count, dispatch] = useReducer(reducer, initialState)
  const [name, setName] = useState('')
  const six = count.firstCounter


    return (
        <UserContext.Provider value={[ name, setName, six, dispatch ]}>
            {props.children}
        </UserContext.Provider>
    )
}
