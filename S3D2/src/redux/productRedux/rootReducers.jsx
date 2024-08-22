import { CartReducer } from "./cartReducer";
import { ProductReducer } from "./productReducer";
import { combineReducers } from "redux";


export const rootReducer = combineReducers({
    product : ProductReducer , 
    cart : CartReducer
})