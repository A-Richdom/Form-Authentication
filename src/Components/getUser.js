import axios from 'axios'

export const getUser = async() => {
    

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };  

    try {
        const response = await axios.get('http://localhost:2000/auth/getUser')
        console.log(response);

        return response
    } 
    catch (error) {
        console.log(error);
    }
}