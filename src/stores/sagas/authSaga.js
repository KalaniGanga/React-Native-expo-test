import { takeLatest, put, call } from "redux-saga/effects";
import {
  loginFailed,
  loginSuccessful,
  logoutSuccess,
} from "../action/authAction";
import { LOGIN_REQUESTING, LOGOUT_REQUEST } from "../constants/authConstants";
import { login, logout } from "../services/firebaseAuthService";

function* userLogging(value) {
  try {
    let response = yield call(login, value.payload);
    yield put(loginSuccessful({ uid: response.uid, ...value.payload }));
  } catch (error) {
    yield put(loginFailed(error));
  }
}

function* userLogout() {
  try {
    yield call(logout);
    yield put(logoutSuccess());
  } catch (error) {
    console.log(error);
  }
}

export default function* watchAuthSaga() {
  yield takeLatest(LOGIN_REQUESTING, userLogging);
  yield takeLatest(LOGOUT_REQUEST, userLogout);
}
