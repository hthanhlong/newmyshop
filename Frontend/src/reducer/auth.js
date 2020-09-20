import {
  LOGIN_USER_ERROR,
  LOGIN_USER_SUCCESS,
  LOG_OUT,
} from "../constant/constant";

const initialState = {
  isAuth: false,
  user: {},
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      const object = {
        isAuth: true,
        user: action.payload,
      };
      return object;
    case LOGIN_USER_ERROR:
      const object1 = {
        isAuth: false,
        error: action.payload,
      };
      return object1;
    case LOG_OUT:
      localStorage.removeItem("user");
      const object2 = {
        isAuth: false,
        user: {},
      };
      return object2;
    default:
      return state;
  }
};
