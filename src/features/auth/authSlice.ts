import { authApi } from './../../api/authApi';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import {setAppStatus} from '../../app/appSlice'



const initialState: initialStateType = {
    isLoggedIn: false
}

type initialStateType = {
    isLoggedIn: boolean
}


export const authMeTC = createAsyncThunk(
    'authMe',
    async (_, {dispatch}) => {
        dispatch(setAppStatus('loading'))
        try {
            const res = await authApi.authMe()
            if(!res.data.resultCode) {
                dispatch(isLoggedIn(true))
                dispatch(setAppStatus('success'))
            } else {
                dispatch(setAppStatus('failed'))
            }
            
        } catch(e: any) {
            dispatch(setAppStatus('failed'))
        }
    }
)


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        isLoggedIn: (state, action: PayloadAction<boolean>) => {
            state.isLoggedIn = action.payload
        }
    }
})



export const authReducers = authSlice.reducer

export const {isLoggedIn} = authSlice.actions