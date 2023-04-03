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
  RESET_DATA,
} from "../constants/stationConstants";

const INITIAL_STATE = {
  isAdded: false,
  isDelete: false,
  requesting: false,
  errors: "",
  stations: [],
};

const stationReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case RESET_DATA: {
      return {
        INITIAL_STATE,
      };
    }
    case ADD_STATION_REQUEST: {
      return {
        ...state,
        requesting: true,
        isAdded: false,
      };
    }
    case ADD_STATION_SUCCESS:
      return {
        ...state,
        requesting: false,
        isAdded: true,
      };
    case ADD_STATION_ERROR:
      return {
        ...state,
        errors: payload,
        isAdded: false,
        requesting: false,
      };
    case GET_STATIONS_REQUEST: {
      return {
        ...state,
        requesting: true,
      };
    }
    case GET_STATIONS_SUCCESS:
      return {
        ...state,
        requesting: false,
        stations: payload,
      };
    case GET_STATIONS_ERROR:
      return {
        ...state,
        errors: payload,
        requesting: false,
      };
    case DELETE_STATIONS_REQUEST: {
      return {
        ...state,
        requesting: true,
        isDelete: false,
      };
    }
    case DELETE_STATIONS_SUCCESS:
      return {
        ...state,
        requesting: false,
        isDelete: true,
      };
    case DELETE_STATIONS_ERROR:
      return {
        ...state,
        errors: payload,
        requesting: false,
        isDelete: false,
      };
    default:
      return state;
  }
};
export default stationReducer;
