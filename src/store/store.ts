import { configureStore } from "@reduxjs/toolkit";
import {authReducers} from '../features/auth/authSlice'
import {appReducers} from '../app/appSlice'


export const store = configureStore({
    reducer: {
        auth: authReducers,
        app: appReducers
    }
})