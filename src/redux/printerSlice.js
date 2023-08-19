import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ID: "",
    Name: "",
    AssetNumber: "",
    SerialNumber: "",
    IP: "",
    Area: "",
    Brand: "",
    Model: ""
};

export const printerSlice = createSlice({
    
    name: "printer",
    initialState,
    reducers: {
        addPrinter: (state, action) =>{
            const{ID, Name, AssetNumber, SerialNumber, IP, Area, Brand, Model} = action.payload;
            state.ID = ID;
            state.Name = Name;
            state.AssetNumber = AssetNumber;
            state.SerialNumber = SerialNumber;
            state.IP = IP;
            state.Area = Area;
            state.Brand = Brand;
            state.Model = Model;
        }
    }
})

export const {addPrinter} = printerSlice.actions;
export default printerSlice.reducer;