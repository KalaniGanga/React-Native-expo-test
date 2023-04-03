import {
  LOGIN_ERROR,
  LOGIN_REQUESTING,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  LOGOUT_REQUEST
} from "../constants/authConstants";

export const loginRequest = (payload) => ({
  type: LOGIN_REQUESTING,
  payload: payload,
});

export const loginSuccessful = userData => ({
  type: LOGIN_SUCCESS,
  payload: userData,
});

export const loginFailed = (payload) => ({
  type: LOGIN_ERROR,
  payload: payload,
});

export const logoutRequest = (payload) => ({
  type: LOGOUT_REQUEST,
  payload: payload,
});

export const logoutSuccess = (payload) => ({
  type: LOGOUT_SUCCESS,
  payload: payload,
});
