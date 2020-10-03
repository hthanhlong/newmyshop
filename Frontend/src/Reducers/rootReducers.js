import { combineReducers } from "redux";
import { authReducers } from "./authReducers";
import { cartReducers } from "./cartReducers";
import { productsReducer } from "./productsReducer";

const rootReducers = combineReducers({
  auth: authReducers,
  cart: cartReducers,
  products: productsReducer,
});

export default rootReducers;
