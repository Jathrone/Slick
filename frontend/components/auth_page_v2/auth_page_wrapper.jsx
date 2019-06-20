import React from "react";
import { Route, Link } from "react-router-dom";
import AuthErrorIndexContainer from "./auth_error_index_container";
import GetStartedForm from "./get_started_form";
import SignInForm from "./sign_in_form";

const AuthPageWrapper = (props) => {
    const {authPageUi, receiveAuthPageUi, clearAuthPageUi, createWorkspace, signup, clearSessionErrors, fetchWorkspaceByName, login, fetchAllWorkspaces, allWorkspaces} = props;

    let createWorkspaceLink;
    let findWorkspaceLink;
    if (Object.keys(authPageUi).length===0) {
        createWorkspaceLink = <Link to={{
            pathname: "/get-started",
            state: {
                getStarted: false
            }
        }}>Create a new workspace</Link>

        findWorkspaceLink = <Link to={{
            pathname: "/get-started",
            state: {
                getStarted: false,
                findWorkspace: true
            }
        }}>Sign up on existing workspace</Link>
    } else {
        createWorkspaceLink = <a onClick={() => receiveAuthPageUi({
            getStarted: false,
            findWorkspace: false
        })}>Create a new workspace</a>

        findWorkspaceLink = <a onClick={() => receiveAuthPageUi({
            getStarted: false,
            findWorkspace: true
        })}>Sign up on existing workspce</a>
    }

    return (
        <div id="auth-page">
            <header className="auth-page-header">
                <div className="slick-logo-div">
                    <Link to={`/`}><img src="https://cdn.brandfolder.io/5H442O3W/as/pl546j-7le8zk-199wkt/Slack_Mark.png?width=30" alt="slick but actually slack logo" /> <div>slick</div></Link>
                </div>
                <nav className="auth-page-nav">
                    <ul className="user-resources-list">
                        <li>Product</li>
                        <li>Pricing</li>
                        <li>Support</li>
                        {(props.loggedIn) ? null : (
                            <>
                                <li>{createWorkspaceLink}</li>
                                <li>{findWorkspaceLink}</li>
                            </>
                        )}
                    </ul>
                    {(props.loggedIn) ? props.yourWorkspacesButton :
                        <div className="auth-page-header-button"><Link to="/signin">Sign in</Link></div>
                    }
                </nav>
            </header>
            <AuthErrorIndexContainer />
            <Route 
                path="/signin" 
                render = {(props) => <SignInForm {...props}
                    receiveAuthPageUi={receiveAuthPageUi}
                    clearAuthPageUi={clearAuthPageUi}
                    authPageUi={authPageUi}
                    workspaceAction={fetchWorkspaceByName}
                    formAction={login}
                    clearSessionErrors={clearSessionErrors} />}></Route>
            <Route 
                path="/get-started" 
                render = {(props) => <GetStartedForm {...props} 
                    receiveAuthPageUi={receiveAuthPageUi} 
                    clearAuthPageUi={clearAuthPageUi}
                    authPageUi={authPageUi}
                    workspaceAction={createWorkspace}
                    formAction={signup}
                    clearSessionErrors={clearSessionErrors}
                    fetchAllWorkspaces={fetchAllWorkspaces}
                    allWorkspaces={allWorkspaces}/>}></Route>
        </div>
    )
}

export default AuthPageWrapper;