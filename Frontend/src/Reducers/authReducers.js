import {
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOG_OUT,
  REGISTER_ERROR,
  REGISTER_SUCCESS,
} from "../constant";

const initialState = {
  isLogin: false,
  isAuth: false,
  user: {},
  data: {},
  error: "",
};

export const authReducers = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        isAuth: true,
        user: action.payload,
      };
    case LOGIN_ERROR:
      return {
        isAuth: false,
        error: action.payload,
      };
    case REGISTER_SUCCESS:
      return {
        isLogin: true,
        isAuth: false,
        data: action.payload,
      };
    case REGISTER_ERROR:
      return {
        isLogin: false,
        isAuth: false,
        data: action.payload,
      };
    case LOG_OUT:
      localStorage.removeItem("Token");
      localStorage.removeItem("persist:root");
      return {
        isAuth: false,
      };
    default:
      return state;
  }
};
