import React from "react";
import { AuthRoute, ReverseAuthRoute, ReverseAuthRedirectRoute } from "../util/route_util";
import { Switch } from "react-router-dom";
import SplashContainer from "./splash/splash_container";
import AuthPageWrapperContainer from "./auth_page/auth_page_wrapper_container";
import WorkspaceWrapper from "./workspace/workspace_wrapper";

const App = () => {
    return(
    <>
        <Switch>
            <ReverseAuthRoute exact path="/" component={SplashContainer}></ReverseAuthRoute>
            <ReverseAuthRoute path={["/signin", "/get-started"]} component={AuthPageWrapperContainer}></ReverseAuthRoute>
            {/* #TODO insert logic for automatic log in of users if user specified the correct route here */}
            <ReverseAuthRedirectRoute path="/"/>
        </Switch>
        <AuthRoute path="/" component={WorkspaceWrapper}></AuthRoute>
    </>
    );
}

export default App;