import {
  FECTH_PRODUCTS_SUCCESS,
  FECTH_PRODUCTS_ERROR,
  SEARCH_PRODUCTS_SUCCESS,
  SEARCH_PRODUCTS_ERROR,
} from "../constant/constant";

const initialState = {
  product: [],
  totalPages: 1,
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FECTH_PRODUCTS_SUCCESS:
      var numberPage = Math.ceil(action.payload.totalProducts / 12);
      const object = {
        product: action.payload.result,
        totalPages: numberPage,
      };
      return object;
    case FECTH_PRODUCTS_ERROR:
      const object1 = {
        error: action.payload,
      };
      return object1;
    case SEARCH_PRODUCTS_SUCCESS:
      var numberPage = Math.ceil(action.payload.totalProductsSearch / 12);
      const object2 = {
        product: action.payload.resultSearch,
        // totalPages: numberPage,
      };
      return object2;
    case SEARCH_PRODUCTS_ERROR:
      return state;
    default:
      return state;
  }
};
