import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOG_OUT,
  REGISTER_AGAIN,
} from "../constant/constant";
import callApi from "../Api/configAxios";

export const authRegister = (user) => async (dispatch) => {
  try {
    const data = await callApi("api/register", "POST", user);
    dispatch({ type: REGISTER_USER_SUCCESS, payload: data.data });
  } catch (error) {
    console.log("hello error");
    dispatch({ type: REGISTER_USER_ERROR, payload: error.response.data });
  }
};

export const authRegisterAgain = () => async (dispatch) => {
  dispatch({ type: REGISTER_AGAIN });
};

export const authLogin = (user) => async (dispatch) => {
  try {
    const data = await callApi("api/login", "POST", user);
    localStorage.setItem("user", JSON.stringify(data.data));
    dispatch({ type: LOGIN_USER_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({ type: LOGIN_USER_ERROR, payload: error.response.data });
  }
};

export const authLogout = () => async (dispatch) => {
  dispatch({ type: LOG_OUT });
};
