import { configureStore } from "@reduxjs/toolkit";
import {combineReducers} from "redux"
import LOCAL_DATA from "./LOCAL_DATA";

// const reducers = combineReducers({
//     LOCAL_DATA
// })

export const store = configureStore({
    reducer: {
        LOCAL_DATA
    }
})