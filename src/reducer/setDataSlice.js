import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    currentCurrency: "$",
}

const setDataSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        setCurrentCurrency: (state, action) => {
            state.currentCurrency = action.payload
        }
    }
})

const { actions, reducer } = setDataSlice;

export const { setCurrentCurrency } = actions;

export default reducer;