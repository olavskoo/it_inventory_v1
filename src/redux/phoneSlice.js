import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ID: "",
    UserName: "Andres Olaves",
    SSO: "223017842",
    Department: "IT",
    Brand: "Apple",
    Model: "iPhone 13",
    IMEI: "sdfsefsdfase"
};

export const phoneSlice = createSlice({

    name: "phone",
    initialState,
    reducers: {
        addPhone: (state, action) =>{
            const{ID, UserName, SSO, Department, Brand, Model, IMEI}= action.payload;
            state.ID = ID;
            state.UserName = UserName;
            state.SSO = SSO;
            state.Department = Department;
            state.Brand = Brand;
            state.Model = Model;
            state.IMEI = IMEI;
        }
    }

})

export const { addPhone } = phoneSlice.actions;
export default phoneSlice.reducer;