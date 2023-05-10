import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import user from "../src/redux/slice/user";
import { rootSaga } from "./redux/saga";
const sagaMiddleware = createSagaMiddleware();


const store = configureStore({
  reducer: {
    user
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;