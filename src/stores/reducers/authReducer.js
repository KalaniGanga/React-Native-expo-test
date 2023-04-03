import {
  LOGIN_REQUESTING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  errorMessages,
} from "../constants/authConstants";

const INITIAL_STATE = {
  isLogged: false,
  requesting: false,
  error: "",
  userId: "",
};

const authReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUESTING: {
      return {
        ...state,
        requesting: true,
        error: "",
      };
    }
    case LOGIN_SUCCESS:
      return {
        ...state,
        requesting: false,
        isLogged: true,
        userId: payload.uid,
        error: "",
      };
    case LOGIN_ERROR:
      return {
        ...state,
        error: errorMessages[payload],
        requesting: false,
      };
    case LOGOUT_REQUEST: {
      return {
        ...state,
        requesting: true,
        error: "",
      };
    }
    case LOGOUT_SUCCESS: {
      return INITIAL_STATE;
    }
    default:
      return state;
  }
};
export default authReducer;
