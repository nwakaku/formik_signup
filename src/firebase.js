import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
    
    apiKey: "AIzaSyAfqvlfxxs8Z3WnFIGEPnt-StR4dT5fA1s",
    authDomain: "formik-c.firebaseapp.com",
    projectId: "formik-c",
    storageBucket: "formik-c.appspot.com",
    messagingSenderId: "611786001318",
    appId: "1:611786001318:web:90fd36b6cc14b895265d67"
    
})

export const auth = app.auth()
export default app