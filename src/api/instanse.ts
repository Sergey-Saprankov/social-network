import axios from 'axios'

export const instanse = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0`,
    withCredentials: true,
    headers: {
        "API-KEY": "c53fde1b-ddc6-4481-b291-1f3e2597684d"
    }
})