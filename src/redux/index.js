import { combineReducers } from "redux";
import { productsReducer } from "./reducers/products";
import { customersReducer } from "./reducers/customers";
import { transactionsReducer } from "./reducers/transactions";

export const reducers = combineReducers({
    products : productsReducer,
    customers : customersReducer,
    transactions : transactionsReducer
})