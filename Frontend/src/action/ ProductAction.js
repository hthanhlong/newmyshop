import {
  FECTH_PRODUCTS_SUCCESS,
  FECTH_PRODUCTS_ERROR,
  SEARCH_PRODUCTS_SUCCESS,
  SEARCH_PRODUCTS_ERROR,
} from "../constant/constant";
import callApi from "../Api/configAxios";

export const fetchData = (pagination) => async (dispatch) => {
  try {
    const productList = await callApi(
      `products/?page=${pagination}&limit=12`,
      "GET"
    );
    dispatch({ type: FECTH_PRODUCTS_SUCCESS, payload: productList.data });
  } catch (error) {
    dispatch({ type: FECTH_PRODUCTS_ERROR, payload: error.response.data });
  }
};

export const searchField = (value) => async (dispatch) => {
  const searchText = value.search;
  try {
    const productList = await callApi(
      `products/search/?q=${searchText}`,
      "GET"
    );
    dispatch({ type: SEARCH_PRODUCTS_SUCCESS, payload: productList.data });
  } catch (error) {
    dispatch({ type: SEARCH_PRODUCTS_ERROR, payload: error.response.data });
  }
};
