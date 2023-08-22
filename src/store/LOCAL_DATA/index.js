import { createSlice } from "@reduxjs/toolkit";
import * as functions from "./functions"
import { initialState } from "./constants";


export const LOCAL_DATA = createSlice({

    name: "LOCAL_DATA",
    initialState,
    reducers: {
        SetTable: functions.SetTable
    }
})

export const LOCAL_DATA_ACTIONS = LOCAL_DATA.actions;

export const TABLE_SELECTOR = (state) => state.LOCAL_DATA.TABLE;

export default LOCAL_DATA.reducer;