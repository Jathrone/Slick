import React from "react";
import { Route } from "react-router-dom";
import SplashContainer from "./splash/splash_container";

const App = () => {
    return(
    <div>
        <h1>Top of App.jsx</h1>
        <Route exact path="/" component={SplashContainer}></Route>
    </div>
    );
}

export default App;