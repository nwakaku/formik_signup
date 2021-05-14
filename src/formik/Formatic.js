import React,{ useContext, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import { UserContext } from '../userContext';
import TextError from './TextError';




const Formatic = () => {
const [users, dispatch,] = useContext(UserContext);
const [error, setError] = useState('');
const { auth } = useContext(UserContext);
const [loading, setLoading] = useState(false)


const initialValues = {
    email: '',
    password: '',
    comfirmPassword: ''
}


async function onSubmit(values){

    if (values.password !== 
    values.comfirmPassword) {
        return setError('passwords do not match')
    }

    try {
        setError('')
        setLoading(true)
        await auth.createUserWithEmailAndPassword({email:values.email, password:values.password})
        } 
        catch {
            setError('Failed to create an account')
        }
       setLoading(false)
       
        console.log('first dipatch', values.email)
            setError('')
    }
      
  


const validationSchema = Yup.object({
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
                    {users ? <div>{users.password}<br/>{users.email}<br/>{users.comfirmPassword}</div> : null }
                    {error ? <div>{error}</div>: null }
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



                    <div className='form-control'>
                        <label htmlFor='comfirmPassword'>ComfirmPassword</label>
                        <Field type='password' id='comfirmPassword' name='comfirmPassword' />
                        <ErrorMessage name='comfirmPassword' component={TextError}/>
                    </div>

                    <button disabled={loading} type='submit'>Submit</button>
                </Form>
            
        </Formik>
    )
}

export default Formatic
