import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ID: "",
    UserName: "Gustavo Saenz",
    SSO: "123456789",
    Department: "IT",
    Brand: "Latitude",
    Model: "5450",
    SerialNumber: "adsfersd"
};

export const laptopSlice = createSlice({

    name: "laptop",
    initialState,
    reducers: {
        addLaptop: (state, action) =>{
            const{ID, UserName, SSO, Department, Brand, Model, SerialNumber}= action.payload;
            state.ID = ID;
            state.UserName = UserName;
            state.SSO = SSO;
            state.Department = Department;
            state.Brand = Brand;
            state.Model = Model;
            state.SerialNumber = SerialNumber;
        }

    }

})

export const {addLaptop} = laptopSlice.actions;
export default laptopSlice.reducer;