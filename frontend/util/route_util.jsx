import React from "react";
import { Redirect, withRouter, Route } from "react-router-dom";
import { connect } from "react-redux";

const ReverseAuth = ({ component: Component, path, loggedIn, exact}) => (
    <Route path={path} exact={exact} render={(props) => (
        !loggedIn ? (
            <Component {...props} />
        ) : (
            <Redirect to="/messages" />
        )
    )}></Route>
)

const Auth = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={(props) => (
        loggedIn ? (
            <Component {...props} />
        ) : (
            <Redirect to="/" />
            )
    )}></Route>
)

const mapStateToProps = state => {
    return {loggedIn: Boolean(state.session.currentUserId)}
}

export const ReverseAuthRoute = withRouter(connect(mapStateToProps)(ReverseAuth));
export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));