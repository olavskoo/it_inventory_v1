import { configureStore } from "@reduxjs/toolkit";
import laptopReducer from "./laptopSlice"
import phoneReducer from "./phoneSlice"
import printerReducer from "./printerSlice"

export const store = configureStore({
    reducer: {
        laptop: laptopReducer,
        phone: phoneReducer,
        printer: printerReducer
        
    }
})