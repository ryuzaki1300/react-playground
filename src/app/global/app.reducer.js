
import { createSlice } from '@reduxjs/toolkit';

const initialState = null;

const globalReducer = createSlice({
    name: "global",
    initialState,
    reducers: {
        setInitialState: (state, action) => {
            return action.payload
        }
    }

})

export const { setInitialState } = globalReducer.actions

export default globalReducer.reducer