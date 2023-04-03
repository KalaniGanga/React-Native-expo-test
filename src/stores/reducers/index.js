import { combineReducers } from "redux";
import authReducer from "./authReducer";
import stationReducer from "./stationReducer";

export const combinedReducers = combineReducers({
  authReducer,
  stationReducer
});
