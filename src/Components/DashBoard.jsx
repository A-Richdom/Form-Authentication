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
      <div>
          <p>dashboard</p>
          <h1>Hello Welcome {user.name}</h1>
          <p>Email: {user.email}</p>

          <button onClick={handleLogOut}>Logout</button>
      </div>
    )
  }
  
}

export default DashBoard