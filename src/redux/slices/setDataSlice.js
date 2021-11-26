import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    selectedPage: "clothes",
    currentCurrencyId: 0,
    allProducts: {},
    currencyIcons: {
        0: "$",
        1: "€",
        2: "¥",
        3: "£",
        4: "₽"
    },
    currentIcon: "$",
    selectedProducts: [],
    selectedProduct: {},
    attribute: {}
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
        setAllProducts: (state, action) => {
            state.allProducts = action.payload
        },
        setProduct: (state, action) => {
            const checkItemInArray = state.selectedProducts.findIndex(item => item.attributes.every(key => item[key.id] === action.payload.product[key.id]))
            const productItem = state.selectedProducts.find(item => item.attributes.every(key => item[key.id] === action.payload.product[key.id]))

            if(checkItemInArray === -1) {
                state.selectedProducts.push({...action.payload.product, qty: 1})
            } else {
                productItem.qty = productItem.qty + 1
            }
        },
        deleteOneProduct: (state, action) => {
            const productItem = state.selectedProducts.find(item => item.attributes.every(key => item[key.id] === action.payload[key.id]))
            const productItemIndex = state.selectedProducts.findIndex(item => item.attributes.every(key => item[key.id] === action.payload[key.id]))

            productItem.qty = productItem.qty - 1

            if(productItem.qty === 0) {
                state.selectedProducts.splice(productItemIndex, 1)
            }
        },
        addOneProduct: (state, action) => {
            const productItem = state.selectedProducts.find(item => item.attributes.every(key => item[key.id] === action.payload[key.id]))

            productItem.qty = productItem.qty + 1
        },
        setCurrentProduct: (state, action) => {
            state.selectedProduct = action.payload
        },
        addAttributes: (state, action) => {
            const elem = state.selectedProducts.find(item => item.attributes.every(key => item[key.id] === action.payload.element[key.id]))  
            
            if(state.selectedProducts.length > 0 && elem) {
                elem[action.payload.key] = action.payload.value
            }
        },
        setAttributes: (state, action) => {
            if(!Object.keys(state.attribute).find(key => state.attribute[key] === action.payload.key)) {
                state.attribute[action.payload.key] = action.payload.value
            }
             
        },
        clearAttributes: (state) => {
            state.attribute = {}
        },
        sendData: (state) => {
            state.selectedProducts = []
        }
    }
})

const { actions, reducer } = setDataSlice;

export const { 
    setCurrentCurrencyId,
    setProduct,
    setAllProducts,
    setCurrentIcon,
    deleteOneProduct,
    addOneProduct,
    setCurrentProduct,
    addAttributes,
    setAttributes,
    clearAttributes,
    sendData
} = actions;

export default reducer;