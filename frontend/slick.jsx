import React from "react"
import ReactDOM from "react-dom"
import Root from "./components/root"
import * as sessionApiUtil from "./util/session_api_util";

document.addEventListener("DOMContentLoaded", ()=> {

    window.signup = sessionApiUtil.signup;
    window.login = sessionApiUtil.login;
    window.logout = sessionApiUtil.logout;
    const root = document.getElementById("root");
    ReactDOM.render(<Root />, root);
})