import { useAppDispatch } from "../common/hooks/appDispatch"
import { Loader } from "../common/components/Loader/Loader"
import '../style/index.scss'
import { useAppSelector } from "../common/hooks/appSelector"
import { useEffect } from "react"
import {authMeTC} from '../features/auth/authSlice'
import { Login } from "../features/auth/Login/Login"

export const App = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(authMeTC())
    }, [])
    const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)
    const status = useAppSelector(state => state.app.appStatus)
    return (
        <div className='container'>
            <Login />
            {status === 'loading' && <Loader />}
        </div>
    )
}