import {
  ADD_STATION_ERROR,
  ADD_STATION_REQUEST,
  ADD_STATION_SUCCESS,
  GET_STATIONS_ERROR,
  GET_STATIONS_REQUEST,
  GET_STATIONS_SUCCESS,
  DELETE_STATIONS_ERROR,
  DELETE_STATIONS_REQUEST,
  DELETE_STATIONS_SUCCESS,
  RESET_DATA
} from "../constants/stationConstants";

export const addStationRequest = (payload) => ({
  type: ADD_STATION_REQUEST,
  payload: payload,
});

export const addStationSuccessful = (payload) => ({
  type: ADD_STATION_SUCCESS,
  payload: payload,
});

export const addStationFailed = (payload) => ({
  type: ADD_STATION_ERROR,
  payload: payload,
});

export const getStationsRequest = (payload) => ({
  type: GET_STATIONS_REQUEST,
  payload: payload,
});

export const getStationsSuccessful = (payload) => ({
  type: GET_STATIONS_SUCCESS,
  payload: payload,
});

export const getStationsFailed = (payload) => ({
  type: GET_STATIONS_ERROR,
  payload: payload,
});

export const deleteStationsRequest = (payload) => ({
  type: DELETE_STATIONS_REQUEST,
  payload: payload,
});

export const deleteStationsSuccessful = (payload) => ({
  type: DELETE_STATIONS_SUCCESS,
  payload: payload,
});

export const deleteStationsFailed = (payload) => ({
  type: DELETE_STATIONS_ERROR,
  payload: payload,
});

export const resetData = () => ({
  type: RESET_DATA,
});