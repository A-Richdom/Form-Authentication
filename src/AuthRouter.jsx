import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import HomePage from './Components/HomePage'
import SignUp from './Components/SignUp'
import Login from './Components/Login';
import DashBoard from './Components/DashBoard';





const router = createBrowserRouter([
    {
        path: '/home',
        element: <HomePage/>
    },
    {
        path: '/home/signup',
        element: <SignUp/>
    },
    {
        path: '/home/login',
        element: <Login/>
    },
    {
        path: '/home/dashboard',
        element: <DashBoard/>
    }
]);
const AuthRouter = () => {
  return (
    <div>
        <RouterProvider router={router} />
    </div>
  )
}

export default AuthRouter