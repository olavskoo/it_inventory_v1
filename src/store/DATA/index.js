import { createSlice } from "@reduxjs/toolkit";
import * as functions from './functions'
import {initialState} from './constants'


export const DATA = createSlice({

    name: "DATA",
    initialState,
    reducers: {
        // global
        restoreSlice: functions.restoreSlice,
        // laptops
        addLaptop:functions.addLaptop,
        deleteLaptop: functions.deleteLaptop,
        editLaptop: functions.editLaptop,
        //scanner
        addScanner: functions.addScanner,
        deleteScanner: functions.deleteScanner,
        editScanner: functions.editScanner

    }

})

export const DATA_ACTIONS = DATA.actions;
// selectors
export const DATA_SELECTOR = (state) => state.DATA
export const LAPTOPS_SELECTOR = (state) => state.DATA.LAPTOPS
export const MOBILES_SELECTOR = (state) => state.DATA.MOBILES
export const PRINTERS_SELECTOR = (state) => state.DATA.PRINTERS
export const SCANNERS_SELECTOR = (state) => state.DATA.SCANNERS

export default DATA.reducer;