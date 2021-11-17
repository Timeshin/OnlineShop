import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    categories: [],
    currencies: []
}

const getDataSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        getAllProducts: (state, action) => {
            state.categories = action.payload.categories
        },
        getAllCurrencies: (state, action) => {
            state.currencies = action.payload.currencies
        }
    }
})

const { actions, reducer } = getDataSlice;

export const { getAllProducts, getAllCurrencies } = actions;

export default reducer;