import React, { useEffect, useState } from 'react'
import {useFormik} from 'formik'
import axios from 'axios';
import {validationSchema} from './YupLogin'
import { useNavigate } from 'react-router-dom';
import { PublicRequest } from './Request';


const Login = () => {
  const [signUpEmail, setsignUpEmail] = useState('');
  const [loginError, setloginError] = useState('');
  const router = useNavigate()

  useEffect(() => {
    //Retrieve the email from Local Storage
    const email = localStorage.getItem('signUpEmail');

    setsignUpEmail(email)
  }, []);


  const { handleSubmit, handleChange, handleBlur, values, errors, touched} = useFormik({
    initialValues: {
      email: signUpEmail ,
      password: ''
    }, 
    
    validationSchema,

    onSubmit: async(data) => {

      try {
        // const response = await axios.post('http://localhost:2000/auth/login', data)
        const response = await PublicRequest.post('/auth/login', data)
        if (response.data.token) {
          localStorage.setItem('token', response.data.token)
          router('/home/dashboard')
        }
      } 
      catch (err) {
      
        const error = err?.response?.data
        
        // console.log(err);
        setloginError(error.message)
      }
      
    },
    enableReinitialize:true
    
  })
// console.log({errors,values})
  return (
    <div>
        <form className='container border border-primary rounded-3 p-4 col-md-4 fw-bold' onSubmit={handleSubmit}>

            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" 
                    placeholder='Email Address'
                    name='email'
                    onChange={(e)=>{
                      setloginError('')
                      handleChange(e)
                    }}
                    onBlur={handleBlur}
                    value={values.email}
                />
                {((errors.email && touched.email) || loginError) && <p className='text-danger'>{errors.email ||  loginError}</p>}
            </div>

            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" 
                    placeholder='Password'
                    name='password'
                    onChange={(e)=> {
                      setloginError('')
                      handleChange(e)
                    }}
                    onBlur={handleBlur}
                    value={values.password}
                />
                {(errors.password && touched.password) || loginError && <p className='text-danger'>{errors.password || loginError}</p>}
            </div>
            
            <button type="submit" class="btn btn-primary form-control">Submit</button>
        </form>
    </div>
  )
}

export default Login