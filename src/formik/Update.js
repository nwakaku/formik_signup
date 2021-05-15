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

                <Form>
                    {/* <div>{users.r.displayName}<br/>{users.r.email}<br/>{users.comfirmPassword}</div>  */}
                    {error ? <div>{error}</div>: null }
                    <h2>Register Here</h2>
                    <div className='form-control'>
                        <label htmlFor='displayName'>DisplayName</label>
                        <Field type='text' id='displayName' name='displayName' 
                        value= {users.r.displayName}/>
                        <ErrorMessage name='displayName' component={TextError}/>
                    </div>
                    
                    <div className='form-control'>
                        <label htmlFor='email'>Email</label>
                        <Field type='text' id='email' name='email' 
                            value={users.r.email}/>
                        <ErrorMessage name='email' component={TextError}/>
                    </div>  
                                
                   <div className='form-control'>
                        <label htmlFor='password'>Password</label>
                        <Field type='password' id='password' name='password' 
                        placeholder='Leave blank to keep the same'/>
                        <ErrorMessage name='password' component={TextError}/>
                    </div>



                    <div className='form-control'>
                        <label htmlFor='comfirmPassword'>ComfirmPassword</label>
                        <Field type='password' id='comfirmPassword' name='comfirmPassword' 
                        placeholder='Leave blank to keep the same'/>
                        <ErrorMessage name='comfirmPassword' component={TextError}/>
                    </div>

                    <button disabled={loading}  type='submit'>Update</button>
                    <div>
                     <Link to='/'>Cancel</Link>
                    </div>
                </Form>
            
        </Formik>
    )
}

export default Update
