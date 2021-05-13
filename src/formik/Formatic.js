import React,{ useContext, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import { UserContext } from '../userContext';
import TextError from './TextError';




const Formatic = () => {
const [users, dispatch,] = useContext(UserContext);


const initialValues = {
    name: '',
    email: '',
    channel: ''
}


const onSubmit = (values,) => {
    dispatch({
        type: 'add',
        name: values.name,
        email: values.email,
        channel: values.channel
    })
    console.log('first dipatch', users)
}

const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    channel: Yup.string().required('Required')
}) 
  return (
        <Formik 
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>

                <Form>
                    {users ? <div>{users.name}<br/>{users.email}<br/>{users.channel}</div> : null }
                    <div className='form-control'>
                        <label htmlFor='name'>Name</label>
                        <Field type='text' id='name' name='name' />
                        <ErrorMessage name='name' component={TextError}/>
                    </div>

                    <div className='form-control'>
                        <label htmlFor='email'>Email</label>
                        <Field type='text' id='email' name='email' />
                        <ErrorMessage name='email' component={TextError}/>
                    </div>

                    <div className='form-control'>
                        <label htmlFor='channel'>Channel</label>
                        <Field type='text' id='channel' name='channel' />
                        <ErrorMessage name='channel' component={TextError}/>
                    </div>

                    <button type='submit'>Submit</button>
                </Form>
            
        </Formik>
    )
}

export default Formatic
