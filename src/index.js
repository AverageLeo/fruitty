import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import { HashRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import thunkMiddlewareS from "redux-thunk";
import {
  requestFruitsReducer,
  loginUserReducer,
  localFavoriteFruitsReducer,
} from "./reducers/reducers";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";

// root reducer combaining all reducers
const rootReducer = combineReducers({
  requestFruitsReducer,
  loginUserReducer,
  localFavoriteFruitsReducer,
});

// creating store with thunk to enable action creators
const store = createStore(rootReducer, applyMiddleware(thunkMiddlewareS));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
