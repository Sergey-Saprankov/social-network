import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

type StatusType = 'idle' | 'loading' | 'failed' | 'success'

type IninitialStateType = {
    appStatus: StatusType
}

const initialState: IninitialStateType = {
    appStatus: 'idle',
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setAppStatus: (state, action: PayloadAction<StatusType>) => {
            state.appStatus = action.payload
        }
    }
})


export const appReducers = appSlice.reducer
export const {setAppStatus} = appSlice.actions