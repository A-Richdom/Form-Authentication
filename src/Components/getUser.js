import axios from 'axios'
import { userRequest } from './Request';


export const getUser = async() => {
    
    
    // let token = localStorage.getItem('token')
    // if (!token) {
    //     alert('Please Login')
    //     // router('/home/login')
    //     return
    // }

    // const config = {
    //     headers: {
    //         Authorization: `Bearer ${token}`,
    //     },
    // };

    try {
        // const response = await axios.get('http://localhost:2000/auth/getUser', config)
        const response = await userRequest().get('/auth/getUser')
        console.log(response);
        return response
    } 
    catch (error) {
        console.log(error);
        if (error.response?.data === 'Your Token is Expired Pls Login') {
            // router('/home/login')
        }
    }
};