import { ADD_TO_CART, REMOVE_FROM_CART } from "../constant/constant";

const begin = JSON.parse(localStorage.getItem("newList")) || [];

export const cartReducer = (state = begin, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const product = action.payload;
      const newList = [...state];
      let alreadyExists = false;
      newList.forEach((x) => {
        if (x.id === product.id) {
          x.count++;
          alreadyExists = true;
        }
      });
      if (!alreadyExists) {
        newList.push({ ...product, count: 1 });
      }
      localStorage.setItem("newList", JSON.stringify(newList));
      return newList;
    case REMOVE_FROM_CART:
      const productid = action.payload; //id product
      const anotherList = [...state].filter((x) => x.id !== productid);
      localStorage.setItem("newList", JSON.stringify(anotherList));
      return anotherList;
    default:
      return state;
  }
};
