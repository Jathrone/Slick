import React from "react";
import { AuthRoute, ReverseAuthRoute } from "../util/route_util";
import { Route } from "react-router-dom";
import SplashContainer from "./splash/splash_container";
import AuthPageWrapperContainer from "./auth_page/auth_page_wrapper_container";
import WorkspaceWrapper from "./workspace/workspace_wrapper";

const App = () => {
    return(
    <>
        <ReverseAuthRoute exact path="/" component={SplashContainer}></ReverseAuthRoute>
        <ReverseAuthRoute path={["/signin", "/get-started"]} component={AuthPageWrapperContainer}></ReverseAuthRoute>
        <AuthRoute path="/messages" component={WorkspaceWrapper}></AuthRoute>
    </>
    );
}

export default App;