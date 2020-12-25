import Axios from "axios";
import "../Api/configAxios";
import { API_ROOT } from "../Api/configAxios";
import {
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOG_OUT,
  REGISTER_ERROR,
  REGISTER_SUCCESS,
} from "../constant";

//////
export const login = (values) => async (dispatch) => {
  await Axios.post(`${API_ROOT}/api/login`, values)
    .then((res) => {
      localStorage.setItem("Token", JSON.stringify(res.data.token));
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log("err", err);
      dispatch({
        type: LOGIN_ERROR,
        payload: err.response.data,
      });
    });
};

export const register = (values) => async (dispatch) => {
  await Axios.post(`${API_ROOT}/api/register`, values)
    .then((res) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: REGISTER_ERROR,
        payload: err.response.data,
      });
    });
};

export const logout = () => async (dispatch) => {
  dispatch({
    type: LOG_OUT,
  });
};
