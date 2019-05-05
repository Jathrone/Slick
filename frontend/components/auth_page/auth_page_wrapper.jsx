import React from "react";
import { Route, Link } from "react-router-dom";
import WrapperAuthFormGetStartedContainer from './wrapper_auth_form_get_started_container';
import WrapperAuthFormSignInContainer from "./wrapper_auth_form_sign_in_container";
import AuthErrorIndexContainer from "./auth_error_index_container";
// import AvailableWorkspaceListContainer from "./available_workspace_list_container";

const AuthPageWrapper = (props) => {

    return (
        <div id="page">
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
                                <li><Link to="/get-started">Create a new workspace</Link></li>
                                <li><Link to="/get-started">Sign up on existing workspace</Link></li>
                            </>
                        )}
                    </ul>
                    {(props.loggedIn) ? props.yourWorkspacesButton :
                        <div className="auth-page-header-button"><Link to="/signin">Sign in</Link></div>
                    }
                </nav>
            </header>
            <AuthErrorIndexContainer />
            <Route path="/signin" component={WrapperAuthFormSignInContainer}></Route>
            <Route path="/get-started" component={WrapperAuthFormGetStartedContainer}></Route>
            {/* <AvailableWorkspaceListContainer /> */}
            <section className="auth-page-bottom-section">
                    <p>Need to get your group started on Slack? 
                        <Link to={{
                            pathname: "/get-started",
                            state: {
                                getStarted: false
                            }
                        }}>Create a new workspace</Link></p>
            </section>
        </div>
    )
}

export default AuthPageWrapper;