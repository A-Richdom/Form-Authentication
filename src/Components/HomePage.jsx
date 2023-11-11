import React from 'react'
import {Link} from 'react-router-dom'


const HomePage = () => {

  return (
    <main className='home border border-primary rounded-4 container'>
        <div className='contentWrapper'>
            <h1 className='text-primary'><marquee behavior="" direction="left-right">Welcome to the Home Page</marquee></h1>

            <div className='btns  d-flex flex-wrap justify-content-center '>

                <button className='btn btn-primary'><Link className='text-white text-decoration-none' to={'/home/signup'}>Sign Up</Link></button>
                <button className='btn btn-success'><Link className='text-white text-decoration-none' to={'/home/login'}>Login</Link></button>
            </div> 
        </div>

           
    </main>
  )
}

export default HomePage