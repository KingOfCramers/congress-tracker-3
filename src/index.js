import "./styles/styles.scss";
import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from './registerServiceWorker';

// Routes
import AppRouter from "./routers/AppRouter";

// Redux
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
// import { addTweet } from "./actions/tweets";
const store = configureStore();

// Link Redux + React
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

// Render
ReactDOM.render(jsx, document.getElementById("app"));
registerServiceWorker();