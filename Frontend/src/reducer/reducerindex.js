import { combineReducers } from "redux";
import { cartReducer } from "./Cart";
import { authReducer } from "./auth";
import { authRegister } from "./registerReducer";
import { productReducer } from "./ProductReducer";
import { DESTROY_SESSION } from "../constant/constant";

const myReducer = combineReducers({
  cart: cartReducer,
  auth: authReducer,
  register: authRegister,
  productList: productReducer,
});

const rootReducer = (state, action) => {
  // Clear all data in redux store to initial.
  if (action.type === DESTROY_SESSION) state = undefined;

  return myReducer(state, action);
};

export default rootReducer;
