import { instanse } from "./instanse"
import {AxiosResponse} from 'axios'

export const authApi = {
    authMe: () => {
        return instanse.get<'', AxiosResponse<ResponseType<AuthMeType>>, {}>(`/auth/me`)
    }
}



type ResponseType<T = {}> = {
    resultCode: number
    messages: string[]
    data: T
}

type AuthMeType = {
    id: number
    email: string
    login: string
} 



