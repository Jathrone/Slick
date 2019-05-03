import React from "react";
import { Route } from "react-router-dom";
import SplashContainer from "./splash/splash_container";
import WorkspaceLogInContainer from "./splash/workspace_log_in_container.js";
import WorkspaceSignUpContainer from "./splash/workspace_sign_up_container";
import UserLogInContainer from "./splash/user_log_in_container";
import UserSignUpContainer from "./splash/user_sign_up_container";

const App = () => {
    return(
    <>
        <Route exact path="/" component={SplashContainer}></Route>
        <Route path="signin"></Route>
        <Route exact path="/signin" component={WorkspaceLogInContainer}></Route>
        <Route exact path="/get-started" component={WorkspaceSignUpContainer}></Route>
        <Route path="/signin/:workspaceId" component={UserLogInContainer}></Route>
        <Route path="/get-started/:workspaceId" component={UserSignUpContainer}></Route>
    </>
    );
}

export default App;