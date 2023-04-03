import { persistStore, persistReducer } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { combinedReducers } from "./reducers";
import rootSaga from "./sagas";
const persistConfig = {
  key: "root",
  storage:AsyncStorage
};

const persistedReducer = persistReducer(persistConfig, combinedReducers);
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = createStore(persistedReducer, applyMiddleware(...middlewares));
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
