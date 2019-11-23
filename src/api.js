import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true
});

export const api = {
    getKey () {
        return instance.post('auth/get-token')
            .then(res => res.data)
    }
};