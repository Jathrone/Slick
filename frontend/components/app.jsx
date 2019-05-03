import React from "react";
import { Route } from "react-router-dom";
import SplashContainer from "./splash/splash_container";
import AuthPageWrapperContainer from "./auth_page/auth_page_wrapper_container";

const App = () => {
    return(
    <>
        <Route exact path="/" component={SplashContainer}></Route>
        <Route path={["/signin", "/get-started"]} component={AuthPageWrapperContainer}></Route>
    </>
    );
}

export default App;