import {
  REGISTER_USER_ERROR,
  REGISTER_USER_SUCCESS,
  REGISTER_AGAIN,
} from "../constant/constant";

const initialState = {
  isRegistering: false,
};

export const authRegister = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER_SUCCESS:
      const object = {
        isRegistering: true,
      };
      return object;
    case REGISTER_USER_ERROR:
      console.log("regi error,", action.payload);
      const object1 = {
        isRegistering: false,
        error: action.payload,
      };
      return object1;
    case REGISTER_AGAIN:
      const object3 = {
        isRegistering: false,
      };
      return object3;
    default:
      return state;
  }
};
