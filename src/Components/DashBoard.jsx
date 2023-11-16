import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getUser } from './getUser';

const DashBoard = () => {
  const router = useNavigate();
  const [user, setuser] = useState();

  useEffect(() => {
   async function getCurrentUser() {
    const res = await getUser()
    setuser(res.data)
   }
   getCurrentUser()
  }, []);
  
  function handleLogOut() {
    localStorage.removeItem('token')
    router('/home/login')
  }
  
  if (user) {
    return (
      <main>
        <div className='container col-md-6 border border-info border-3 rounded-2 '>
          <h1>Dashboard</h1>
          <div className='p-5'>
            <h1>Hello Welcome {user.name}</h1>
            <p>Email: {user.email}</p>
          </div>
        </div>
          
          <button onClick={handleLogOut}>Logout</button>
      </main>
    )
  }
  
}

export default DashBoard