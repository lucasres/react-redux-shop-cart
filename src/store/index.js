import { createStore, combineReducers } from "redux";
import productReduce from "../actions/product";
import cartReduce from "../actions/cart";

const rootReducer = combineReducers({product:productReduce,cart:cartReduce});

const store = createStore(rootReducer);

export default store;