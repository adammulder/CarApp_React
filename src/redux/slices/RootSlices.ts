import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        year: "Year",
        make: 'Make',
        model: "Model",
        color: "Color",
    },
    reducers:{
        //action is submitted elsewhere -written to state.name
        chooseYear: (state, action) => {state.year = action.payload},
        chooseMake: (state, action) => {state.make = action.payload},
        chooseModel: (state, action) => {state.model = action.payload},
        chooseColor: (state, action) => {state.color = action.payload},
    }
})

export const reducer = rootSlice.reducer;
export const { chooseYear, chooseMake, chooseModel, chooseColor } = rootSlice.actions