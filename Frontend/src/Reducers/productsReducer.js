const {
  FETCH_ERROR,
  FETCH_SUCCESS,
  SORT_PRODUCTS_SUCCESS,
  SORT_PRODUCTS_ERROR,
} = require("../constant");

export const productsReducer = (state = { productList: [] }, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        ...state,
        productList: action.payload.result,
        totalProducts: action.payload.totalProducts,
      };
    case FETCH_ERROR:
      return { error: action.payload };
    case SORT_PRODUCTS_SUCCESS:
      const sortName = action.payload;

      if (sortName === "hightest") {
        return {
          ...state,
          productList: [...state.productList].sort(
            (a, b) => b.newprice - a.newprice
          ),
        };
      }
      if (sortName === "lowest") {
        return {
          ...state,
          productList: [...state.productList].sort(
            (a, b) => a.newprice - b.newprice
          ),
        };
      }

      return {
        ...state,
        productList: [...state.productList].sort((a, b) => a.id - b.id),
      };
    case SORT_PRODUCTS_ERROR:
      return {};
    default:
      return state;
  }
};
