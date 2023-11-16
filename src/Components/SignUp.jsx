import React, { useState } from 'react'
import {useFormik} from 'formik'
import {validationSchema} from './YupSignUp'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import { PublicRequest } from './Request'



const SignUp = () => {
    const router = useNavigate()

    const [responseError,setResponseError] = useState('')
    
    
    const {handleSubmit, handleChange, handleBlur, values, errors, touched, resetForm} = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: ""
        },

        validationSchema,

        onSubmit: async (data) => {
            console.log(data);
            try {
                // const response = await axios.post('http://localhost:2000/auth/signup', data)
                const response = await PublicRequest.post('/auth/signup', data)
                console.log({response:response.data});
                console.log(response);

            //Save the Email to Local Storage
                localStorage.setItem('signUpEmail', values.email)

                //SAVING Arrays OF EXISTING EMAILs to Local Storage
                // const existingEmails =JSON.parse(localStorage.getItem('signUpEmails')) || [];
               
                // console.log({existingEmails});

                // localStorage.setItem('signUpEmails', JSON.stringify([...existingEmails,data.email]));

                resetForm();
                router('/home/login')
            } 
            catch (err) {
                const error = err?.response?.data

                setResponseError(error?.message) 
                console.log(err);
            }
        }
    });
   
  return (
    <div>
        <form className='container border border-primary rounded-3 p-5 col-md-4 fw-bold' onSubmit={handleSubmit}>
            <div class="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="name" className={`form-control ${errors.name && touched.name && 'error'}`}
                    placeholder='Full Name'
                    name='name'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                />
                {errors.name && touched.name && <p className='text-danger'>{errors.name}</p>}
            </div>

            <div class="mb-3">
                <label htmlFor='email' className='form-label'>Email address</label>
                <input type="email" className={`form-control ${((errors.email && touched.email) || responseError) && 'error'}`}
                    placeholder='Email Address' 
                    name='email'
                    onChange={(e)=>{
                        setResponseError('')
                        handleChange(e)}}
                    onBlur={handleBlur}
                    value={values.email}
                />
                 {((errors.email && touched.email) || responseError) &&  <p className='text-danger'>{errors.email || responseError}</p>}
            </div>

            <div class="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className={`form-control ${errors.password && touched.password && 'error'}`} 
                    placeholder='Password'
                    name='password'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password} 
                />
                {errors.password && touched.password && <p className='text-danger'>{errors.password}</p>}
            </div>
            
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
  )
};

export default SignUp