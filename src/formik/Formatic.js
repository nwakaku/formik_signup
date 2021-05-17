import React,{ useContext, useEffect, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import { UserContext } from '../userContext';
import TextError from './TextError';
import { auth } from '../firebase';
import { Link, useHistory } from "react-router-dom"






const Formatic = () => {
const {signup, users} = useContext(UserContext);
const [error, setError] = useState('');
const [test, setTest] = useState({})
const [loading, setLoading] = useState(false)
const history = useHistory();


const initialValues = {
    displayName: '',
    email: '',
    password: '',
    comfirmPassword: ''
}

const onSubmit = (values) => {
    if(values.comfirmPassword !== values.password){
        return setError('password do not match')
    }
    setError('');
    setLoading(true);
    const email = values.email;
    const password = values.password;
    const fullName = values.displayName;
    signup(email, password, fullName)
      .then((ref) => {
        setLoading(false);
        history.push("/")
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
      console.log("clicked", users.email)
  };
      
  


const validationSchema = Yup.object({
    displayName: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().required('Required'),
    comfirmPassword: Yup.string().required('Required')
}) 
  return (
        <Formik 
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            <div className="signup-form">
                <Form>
                    {/* <div>{users.r.displayName}<br/>{users.r.email}<br/>{users.comfirmPassword}</div>  */}
                   
                    <div className='form-header'>
                        <h2>Sign Up</h2>
                        <p>Fill out this form</p>
                        {error ? <p>{error}</p>: null }
                        </div>
                        <div className="form-group">
                        <label htmlFor='displayName'> DisplayName</label>
                        <Field type='text' id='displayName' name='displayName' className="form-control"/>
                        <ErrorMessage name='displayName' component={TextError}/>
                    </div>
                    
                    <div className='form-group'>
                        <label htmlFor='email' >Email</label>
                        <Field type='text' id='email' name='email' className="form-control"/>
                        <ErrorMessage name='email' component={TextError}/>
                    </div>  
                                
                   <div className='form-group'>
                        <label htmlFor='password' >Password</label>
                        <Field type='password' id='password' name='password' className="form-control"/>
                        <ErrorMessage name='password' component={TextError}/>
                    </div>



                    <div className='form-group'>
                        <label htmlFor='comfirmPassword'>ComfirmPassword</label>
                        <Field type='password' id='comfirmPassword' name='comfirmPassword' className="form-control"/>
                        <ErrorMessage name='comfirmPassword' component={TextError}/>
                    </div>

                    <div className="form-group">
                    <button className="btn btn-primary btn-block btn-lg" disabled={loading}  type='submit'>Register</button>
                    </div>

                    <div className="text-center small">
                    Need an account? <Link to='/login'>Log in</Link>
                    </div>
                </Form>
            </div>
                
            
        </Formik>
    )
}

export default Formatic
