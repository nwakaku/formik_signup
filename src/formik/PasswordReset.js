import React,{ useContext, useEffect, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import { UserContext } from '../userContext';
import TextError from './TextError';
import { Link } from "react-router-dom"


const Login = () => {
const {passwordReset, users} = useContext(UserContext);
const [error, setError] = useState('');
const [message, setMessage] = useState('');
const [loading, setLoading] = useState(false)


const initialValues = {
    email: '',
    password: '',
}

const onSubmit = (values) => {
    
    setLoading(true);
  setError('');
  setMessage('');
  const email = values.email;
  passwordReset(email)
    .then((msg) => {
      setMessage(msg);
      setLoading(false);
    })
    .catch((error) => {
      setError(error.message);
      setLoading(false);
    });
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
                    {message ? <div>{message}</div>: null }
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

