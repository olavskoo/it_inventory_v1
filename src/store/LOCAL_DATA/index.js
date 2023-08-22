import { createSlice } from "@reduxjs/toolkit";
import * as functions from "./functions"

export const initialState = {
    TABLE: []
}

export const LOCAL_DATA = createSlice({

    name: "LOCAL_DATA",
    initialState,
    reducers: {
        ChangeTable: functions.ChangeTable
    }
})

export const LOCAL_DATA_ACTION = LOCAL_DATA.actions;

export const TABLE_SELECTOR = (state) => state.LOCAL_DATA.TABLE;