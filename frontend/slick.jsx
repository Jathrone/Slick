import React from "react"
import ReactDOM from "react-dom"
import Root from "./components/root"
import * as sessionApiUtil from "./util/session_api_util";
import configureStore from "./store/store"

document.addEventListener("DOMContentLoaded", ()=> {
    // testing start
    window.signup = sessionApiUtil.signup;
    window.login = sessionApiUtil.login;
    window.logout = sessionApiUtil.logout;
    // testing end
    const store = configureStore();
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    const root = document.getElementById("root");
    ReactDOM.render(<Root />, root);
})