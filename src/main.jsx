import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "sonner";
import { Provider } from "react-redux";
import { reducers } from "./redux/index.js";
import { legacy_createStore as createStore } from "redux";


const store = createStore(reducers);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <NextUIProvider>
        <BrowserRouter>
          <Toaster position="top-center" />
          <App />
        </BrowserRouter>
      </NextUIProvider>
    </Provider>
  </React.StrictMode>
);
