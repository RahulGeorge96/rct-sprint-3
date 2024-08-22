import { applyMiddleware, legacy_createStore } from "redux"
import { RootReducer } from "./rootReducer"
import logger from "redux-logger"
import {thunk} from "redux-thunk"


export const store = legacy_createStore(
    RootReducer,
    applyMiddleware(logger , thunk)
)

