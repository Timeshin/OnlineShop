import { getAllProducts, getAllCurrencies } from "../slices/getDataSlice";
import { 
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
} from "../slices/setDataSlice";

export {
    getAllProducts,
    getAllCurrencies,
    setAllProducts,
    setCurrentCurrencyId,
    setProduct,
    setCurrentIcon,
    deleteOneProduct,
    addOneProduct,
    setCurrentProduct,
    addAttributes,
    setAttributes,
    clearAttributes,
    sendData
}