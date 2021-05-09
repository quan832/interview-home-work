import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import reduxThunk from "redux-thunk";
// import reducers
// middleWareSaga
import createMiddleWareSaga from "redux-saga";
import { rootSaga } from "./sagas/rootSaga";
import getBlogs from "./reducers/getPost";
import LoginUser from "./reducers/auth/loginUser";
import getUser from "./reducers/getUser";

const middleWareSaga = createMiddleWareSaga();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  // declare reducers in here
  getBlogsReducer: getBlogs,
  getUsersReducer: getUser,
  loginUserReducer: LoginUser,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(reduxThunk, middleWareSaga))
);

//call saga
middleWareSaga.run(rootSaga);

export default store;
