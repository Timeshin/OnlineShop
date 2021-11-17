import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    currentCurrencyId: 0,
    currencyIcons: {
        0: "$",
        1: "€",
        2: "¥",
        3: "£",
        4: "₽"
    },
    currentIcon: "$",
    selectedProducts: []
}

const setDataSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        setCurrentCurrencyId: (state, action) => {
            state.currentCurrencyId = action.payload
        },
        setCurrentIcon: (state, action) => {
            state.currentIcon = action.payload
        },
        setProduct: (state, action) => {
            const checkItemInArray = state.selectedProducts.findIndex(item => item.id === action.payload.product.id)
            const productItem = state.selectedProducts.find(item => item.id === action.payload.product.id)
        
            if(checkItemInArray === -1) {
                state.selectedProducts.push({...action.payload.product, qty: 1})
            } else {
                productItem.qty = productItem.qty + 1
            }
        },
        deleteOneProduct: (state, action) => {
            const productItem = state.selectedProducts.find(item => item.id === action.payload.id)

            productItem.qty = productItem.qty - 1

            if(productItem.qty === 0) {
                state.selectedProducts = state.selectedProducts.filter(item => item.id !== productItem.id)
            }
        },
        addOneProduct: (state, action) => {
            const productItem = state.selectedProducts.find(item => item.id === action.payload.id)

            productItem.qty = productItem.qty + 1
        }
    }
})

const { actions, reducer } = setDataSlice;

export const { 
    setCurrentCurrencyId, 
    setProduct, 
    setCurrentIcon, 
    deleteOneProduct,
    addOneProduct
} = actions;

export default reducer;