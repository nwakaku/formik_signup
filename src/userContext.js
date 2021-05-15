import React, { createContext, useReducer, useEffect, useState} from 'react'
import { auth } from './firebase';


export const UserContext = createContext();

export const UserProvider = ({ children }) => {

const [users, dispatch] = useReducer((state, action) => {
    switch (action.type) {
        case 'add':
            return {
                ...state,
                r:action.user
            };
        case 'minus':
            return {
                state
            }
        default: 
            return state;
    }
})

//trying out something
// const [currentUser, setCurrentUser] = useState();
const [loading, setLoading] = useState(true);
const signup = (email, password, fullName) => {
  let promise = new Promise(function (resolve, reject) {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((ref) => {
        ref.user.updateProfile({
          displayName: fullName,
        });
        resolve(ref);
      })
      .catch((error) => reject(error));
  });
  return promise;
};
const signin = (email, password) => {
  let promise = new Promise(function (resolve, reject) {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((ref) => {
        resolve(ref);
      })
      .catch((error) => {
        reject(error);
      });
  });
  return promise;
};
const signout = () => {
  return auth.signOut();
};
const passwordReset = (email) => {
  let promise = new Promise(function (resolve, reject) {
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        resolve(`Password Reset Email sent to ${email}`);
      })
      .catch((error) => {
        reject(error);
      });
  });
  return promise;
};
useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged((user) => {
    dispatch({
        type: "add",
        user
    })
    // setCurrentUser(user);
    setLoading(false);
  });
  return unsubscribe;
}, []);
const value = {
    users,
  signup,
  signin,
  signout,
  passwordReset
};
    return (
        <UserContext.Provider value={value}>
            {!loading && children}
        </UserContext.Provider>
    )
}
