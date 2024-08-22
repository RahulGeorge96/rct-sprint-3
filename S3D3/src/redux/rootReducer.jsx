import { combineReducers } from "redux";
import { BookReducer } from "./bookReducer";
import { ThemeReducer } from "./themeReducer";

export const RootReducer = combineReducers({
    booksR : BookReducer , 
    themeR : ThemeReducer
})