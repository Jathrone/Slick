import React from "react";
import { withRouter, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const ReverseAuth = ({ component: Component, path, loggedIn, exact, redirect}) => (
    <Route path={path} exact={exact} render={(props) => (
        !loggedIn ? (
            <Component {...props} />
        ) : (
            null
        )
    )}></Route>
)

const Auth = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={(props) => (
        loggedIn ? (
            <Component {...props} />
        ) : (
            null
            )
    )}></Route>
)

const ReverseAuthRedirect = ({path, loggedIn}) => {
    return (
        !loggedIn ? (
            <Redirect to={path}/>
        ) : (
            null
        )
    )
};

const mapStateToProps = state => {
    return {loggedIn: Boolean(state.session.currentUserId)}
}

export const ReverseAuthRoute = withRouter(connect(mapStateToProps)(ReverseAuth));
export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ReverseAuthRedirectRoute = withRouter(connect(mapStateToProps)(ReverseAuthRedirect));