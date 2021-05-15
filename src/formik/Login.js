import React,{ useContext, useEffect, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import { UserContext } from '../userContext';
import TextError from './TextError';
import { auth } from '../firebase';
import { Link, useHistory } from "react-router-dom"


const Login = () => {
const {signin, users} = useContext(UserContext);
const [error, setError] = useState('');
const [test, setTest] = useState({})
const [loading, setLoading] = useState(false)
const history = useHistory();


const initialValues = {
    email: '',
    password: '',
}

const onSubmit = (values) => {
    
    setError('');
    setLoading(true);
    const email = values.email;
    const password = values.password;
    signin(email, password )
      .then((ref) => {
        setLoading(false);
        history.push("/")
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
      console.log("clicked", values)
  };
      
  


const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().required('Required'),
}) 
  return (
        <Formik 
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>

                <Form>
                    {/* <div>{users.r.displayName}<br/>{users.r.email}<br/>{users.comfirmPassword}</div>  */}
                    {error ? <div>{error}</div>: null }
                    <h2>Login Here</h2>

                    
                    <div className='form-control'>
                        <label htmlFor='email'>Email</label>
                        <Field type='text' id='email' name='email' />
                        <ErrorMessage name='email' component={TextError}/>
                    </div>  
                                
                   <div className='form-control'>
                        <label htmlFor='password'>Password</label>
                        <Field type='password' id='password' name='password' />
                        <ErrorMessage name='password' component={TextError}/>
                    </div>


                    <button disabled={loading}  type='submit'>Log in</button>
                    <div>
                    <Link to="/passwordReset">Forgot Password</Link>
                    Need an account? <Link to='/formatic'>Register</Link>
                    </div>
                </Form>
            
        </Formik>
    )
}

export default Login
