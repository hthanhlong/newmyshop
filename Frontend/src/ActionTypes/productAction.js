import Axios from "axios";
import "../Api/configAxios";
import { API_ROOT } from "../Api/configAxios";
import {
  FETCH_ERROR,
  FETCH_SUCCESS,
  SORT_PRODUCTS_SUCCESS,
  SORT_PRODUCTS_ERROR,
} from "../constant";

export const getProducts = (value) => async (dispatch) => {
  await Axios.get(`${API_ROOT}/products/?page=${value}&limit=16`)
    .then((res) => {
      dispatch({
        type: FETCH_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: FETCH_ERROR,
        payload: err.response.data,
      });
    });
};

export const sortProducts = (sort) => async (dispatch) => {
  try {
    if (sort) {
      await dispatch({
        type: SORT_PRODUCTS_SUCCESS,
        payload: sort,
      });
    }
  } catch (error) {
    await dispatch({
      type: SORT_PRODUCTS_ERROR,
      payload: error.message,
    });
  }
};
