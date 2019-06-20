import React from "react";
import { AuthRoute, ReverseAuthRoute, ReverseAuthRedirectRoute, AuthRedirectRoute } from "../util/route_util";
import { Switch } from "react-router-dom";
import SplashContainer from "./splash/splash_container";
import AuthPageWrapperContainer from "./auth_page_v2/auth_page_wrapper_container";
import WorkspaceWrapperContainer from "./workspace/workspace_wrapper_container";

const App = () => {
    return(
    <>
        <Switch>
            <ReverseAuthRoute exact path="/" component={SplashContainer}></ReverseAuthRoute>
            <ReverseAuthRoute path={["/signin", "/get-started"]} component={AuthPageWrapperContainer}></ReverseAuthRoute>
            {/* #TODO insert logic for automatic log in of users if user specified the correct route here */}
            <ReverseAuthRedirectRoute path="/"/>
        </Switch>
        <Switch>
            <AuthRoute exact path="/" component={WorkspaceWrapperContainer}></AuthRoute>
            <AuthRedirectRoute path="/" />
        </Switch>
    </>
    );
}

export default App;