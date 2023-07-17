import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { testReducer } from "./reducers/testReducer";

const reducers = combineReducers({
  test: testReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducers,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
