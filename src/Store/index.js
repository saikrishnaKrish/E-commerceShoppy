import { combineReducers,createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";

import cartReducer from './cart';
import CategoriesReducer from "./categories";

const reducer = combineReducers({
    cart:cartReducer,
    categories:CategoriesReducer
});

const store = createStore(reducer,applyMiddleware(thunk));

export default store