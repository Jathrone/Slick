import React from "react";
import { Route } from "react-router-dom";
import SplashContainer from "./splash/splash_container";
import WorkspaceLogInContainer from "./splash/workspace_log_in_container.js";
import WorkspaceSignUpContainer from "./splash/workspace_sign_up_container";

const App = () => {
    return(
    <div>
        <h1>Top of App.jsx</h1>
        <Route exact path="/" component={SplashContainer}></Route>
        <Route exact path="/signin" component={WorkspaceLogInContainer}></Route>
        <Route exact path="/get-started" component={WorkspaceSignUpContainer}></Route>
    </div>
    );
}

export default App;