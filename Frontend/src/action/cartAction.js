import axios from "axios";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../constant/constant";

export const addToCart = (productId) => async (dispatch) => {
  await axios
    .get(`http://localhost:5000/products/${productId}`)
    .then((res) =>
      dispatch({
        type: ADD_TO_CART,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err.message));
};

export const removeFromCart = (productId) => async (dispatch) => {
  await dispatch({
    type: REMOVE_FROM_CART,
    payload: productId,
  });
};
