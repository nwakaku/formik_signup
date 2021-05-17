import React, { createContext, useReducer, useEffect, useState} from 'react'
import { auth, db } from './firebase';


export const UserContext = createContext();

export const UserProvider = ({ children }) => {

const [users, dispatch] = useReducer((state, action) => {
  const kite = action.user
    switch (action.type) {
        case 'add':
            return {
                ...state,
                kite
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
        db.collection('userProfile')
            .doc(fullName)
            .set({
              email,
              fullName,
              photoURL:
                'https://firebasestorage.googleapis.com/v0/b/instagram-clone-66f7a.appspot.com/o/BlankImage.jpg?alt=media&token=c4d05e11-5df1-4a8a-ba8a-9a6f0cd36c4b',
              bio: '',
              website: '',
              phone: '',
            })
            .then(() => {
              resolve(ref);
            });
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

const updateEmail = (email) => {
  return users.updateEmail(email);
};

const updatePassword = (password) => {
return users.updatePassword(password);
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
  // currentUser,
    users,
  signup,
  signin,
  signout,
  passwordReset,
  updateEmail,
  updatePassword
};
    return (
        <UserContext.Provider value={value}>
            {!loading && children}
        </UserContext.Provider>
    )
}
