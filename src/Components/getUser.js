import axios from 'axios'

export const getUser = async() => {


    const config = {
        Headers: {
            Authorization: `Bearer ${token}`,
        },
    }
};