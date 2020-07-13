import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";
import thunkMiddlewareS from "redux-thunk";
// import rootReducer from "./reducers/rootReducer";
import { requestFruitsReducer } from "./reducers/reducers";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";

const rootReducer = combineReducers({ requestFruitsReducer });

const store = createStore(rootReducer, applyMiddleware(thunkMiddlewareS));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
