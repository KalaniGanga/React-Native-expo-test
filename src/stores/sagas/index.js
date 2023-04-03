import { all, fork } from "redux-saga/effects";
import watchAuthSaga from "./authSaga";
import watchStationSaga from "./stationSaga";


// Redux Saga: Root Saga
export default function* rootSaga() {
  yield all([fork(watchAuthSaga), fork(watchStationSaga)]);
}
