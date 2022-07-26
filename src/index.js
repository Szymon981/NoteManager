import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "@reduxjs/toolkit";
import rootReducer from "./store/reducer";
// import reducerA from "./store/reducerA";
// import reducerB from "./store/reducerB";

// const rootReducer = combineReducers({
//   rA: reducerA,
//   rB: reducerB,
// });

const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
