import axios from 'axios'

let Base_Url = 'http://localhost:2000/'

export const  PublicRequest = axios.create({
    baseURL: Base_Url
});

export const userRequest = () => {
    let token = localStorage.getItem('token')

    if (!token) {
        alert('Please Login')
    }

    return axios.create({
        baseURL: Base_Url,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
};