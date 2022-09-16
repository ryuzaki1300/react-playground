import { configureStore } from "@reduxjs/toolkit"
import globalReducer from "app/global/app.reducer"

export const store = configureStore({
    reducer : {
        global : globalReducer
    }
})