import { combineReducers,createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";

import cartReducer from './cart';
import CategoriesReducer from "./categories";
import productReducers from "./product";
const reducer = combineReducers({
    cart:cartReducer,
    categories:CategoriesReducer,
    products:productReducers
});

const store = createStore(reducer,applyMiddleware(thunk));

export default store