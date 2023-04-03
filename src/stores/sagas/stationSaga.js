import { takeLatest, put, call } from "redux-saga/effects";
import {
  addStations,
  getAllStations,
  deleteStations,
} from "../services/firebaseFirestoreService";
import {
  addStationFailed,
  addStationSuccessful,
  deleteStationsFailed,
  deleteStationsSuccessful,
  getStationsFailed,
  getStationsRequest,
  getStationsSuccessful,
} from "../action/stationAction";
import {
  ADD_STATION_REQUEST,
  DELETE_STATIONS_REQUEST,
  GET_STATIONS_REQUEST,
} from "../constants/stationConstants";

function* addStation(value) {
  try {
    let response = yield call(addStations, value.payload);
    yield put(getStationsRequest());
    yield put(addStationSuccessful({ uid: response.uid, ...value.payload }));
  } catch (error) {
    yield put(addStationFailed(error));
  }
}

function* getStations(value) {
  try {
    let response = yield call(getAllStations, value.payload);
    yield put(getStationsSuccessful(response));
  } catch (error) {
    yield put(getStationsFailed(error));
  }
}

function* deleteStation(value) {
  try {
    let response = yield call(deleteStations, value.payload);
    yield put(deleteStationsSuccessful());
    yield put(getStationsRequest());
  } catch (error) {
    yield put(deleteStationsFailed(error));
  }
}

export default function* watchStationSaga() {
  yield takeLatest(ADD_STATION_REQUEST, addStation);
  yield takeLatest(GET_STATIONS_REQUEST, getStations);
  yield takeLatest(DELETE_STATIONS_REQUEST, deleteStation);
}
