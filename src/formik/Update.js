import React,{ useContext, useEffect, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import { UserContext } from '../userContext';
import TextError from './TextError';
import { auth } from '../firebase';
import { Link, useHistory } from "react-router-dom"






const Update = () => {
const {users, updateEmail, updatePassword} = useContext(UserContext);
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

    const promises = []
    setLoading(true)
    setError("")
    if (values.displayName !== users.r.displayName){
        promises.push(updateEmail(values.displayName))
    }
    if (values.email !== users.email){
        promises.push(updateEmail(values.email))
    }
    if (values.password){
        promises.push(updatePassword(values.password))
    }

    Promise.all(promises).then(() => {
        history.push('/')
    }).catch((err) => {
        setError(err)
    }).finally(() => {
        setLoading(false)
    })
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
                    {error ? <div>{error}</div>: null }

                    <div className="form-header">
                        <h2>Update</h2>
                        <p>Shine your eye</p>
                    </div>
                    
                    <div className='form-group'>
                        <label htmlFor='displayName'>DisplayName</label>
                        <Field type='text' id='displayName' name='displayName' className='form-control'
                        value= {users.kite.displayName}/>
                        <ErrorMessage name='displayName' component={TextError}/>
                    </div>
                    
                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <Field type='text' id='email' name='email' className='form-control'
                            value={users.kite.email}/>
                        <ErrorMessage name='email' component={TextError}/>
                    </div>  
                                
                   <div className='form-group'>
                        <label htmlFor='password'>Password</label>
                        <Field type='password' id='password' name='password' className='form-control'
                        placeholder='Leave blank to keep the same'/>
                        <ErrorMessage name='password' component={TextError}/>
                    </div>



                    <div className='form-group'>
                        <label htmlFor='comfirmPassword'>ComfirmPassword</label>
                        <Field type='password' id='comfirmPassword' name='comfirmPassword' className='form-control'
                        placeholder='Leave blank to keep the same'/>
                        <ErrorMessage name='comfirmPassword' component={TextError}/>
                    </div>

                    <div className="form-group">
                    <button className="btn btn-primary btn-block btn-lg" disabled={loading}  type='submit'>Update</button>
                    </div>

                    <div className="text-center small">
                     <Link to='/'>Cancel</Link>
                    </div>
                </Form>
                </div>

                
            
        </Formik>
    )
}

export default Update
