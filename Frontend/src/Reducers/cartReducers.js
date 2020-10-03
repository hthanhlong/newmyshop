import { ADD_TO_CART, REMOVE_FROM_CART } from "../constant";

export const cartReducers = (state = { itemsList: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const product = action.payload.product;
      const updateItem = [...state.itemsList].find((x) => x.id === product.id);
      if (updateItem) {
        return {
          itemsList: [...state.itemsList].map((x) => {
            if (x.id === product.id) {
              return { ...x, count: x.count + 1 };
            } else {
              return { ...x };
            }
          }),
        };
      }
      return {
        itemsList: [
          ...state.itemsList,
          { ...product, count: action.payload.qty },
        ],
      };
    case REMOVE_FROM_CART:
      const productId = action.payload.id;
      return {
        itemsList: [...state.itemsList].filter((x) => x.id !== productId),
      };
    default:
      return state;
  }
};
