import { createSlice } from "@reduxjs/toolkit";
import * as functions from './functions'
// import {initialState} from './constants'


export const initalState  = {
    LAPTOPS: [],
    MOBILES: [],
    PRINTERS: [],
}


export const DATA = createSlice({

    name: "DATA",
    initalState,
    reducers: {
        // global
        restoreSlice: functions.restoreSlice,
        // laptops
        addLaptop:functions.addLaptop,
        deleteLaptop: functions.deleteLaptop,
        editLaptop: functions.editLaptop

    }

})

export const DATA_ACTIONS = DATA.actions;
// selectors
export const DATA_SELECTOR = (state) => state.DATA
export const LAPTOPS_SELECTOR = (state) => state.DATA.LAPTOPS
export const MOBILES_SELECTOR = (state) => state.DATA.MOBILES
export const PRINTERS_SELECTOR = (state) => state.DATA.PRINTERS