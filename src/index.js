import React from "react";
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import configureStore from './store'
/* Router */

import ReactDOM from "react-dom";

/* Import Component and Pages */

import App from "./App";
const { store, persistor } = configureStore()

ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
    , document.getElementById("root"));
