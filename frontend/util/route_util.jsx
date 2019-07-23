import React from "react";
import { withRouter, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const ReverseAuth = (props) => {
    const { component: Component, path, loggedIn, exact, redirect, state } = props;
    if (props.location.state && props.location.state.deactivateSession) {
        props.location.state.deactivateSession();
        props.location.state = {};
    }
    return (
    <Route path={path} exact={exact} render={(props) => (
        !loggedIn ? (
            <Component {...props} />
        ) : (
            null
        )
    )}></Route>
    )
}

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

const AuthRedirect = ({ path, loggedIn }) => {
    return (
        loggedIn ? (
            <Redirect to={path} />
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
export const AuthRedirectRoute = withRouter(connect(mapStateToProps)(AuthRedirect));