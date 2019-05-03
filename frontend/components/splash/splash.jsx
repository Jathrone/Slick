import React from "react";
import { Link } from "react-router-dom";
import SplashWorkspaceSignUpForm from "./splash_workspace_sign_up_form";

class Splash extends React.Component {

    componentDidMount() {
        this.props.allActiveWorkspacesIds.forEach(workspaceId => {
            this.props.fetchWorkspace(workspaceId);
        })
    }

    render () {
        let navbar;
        if (this.props.loggedIn) {
            navbar = this.props.yourWorkspacesButton;
        } else {
            navbar = 
                <div className="auth-link-container">
                    <Link to={`/signin`}>Sign in</Link> 
                    <br/>
                    <Link to={`/get-started`}>GET STARTED</Link>
                </div>
        }

        return (
            <>
                <header className="splash-header">
                    <div className="slick-logo-div">
                        <Link to={`/`}>slick</Link>
                    </div>
                    <nav className="splash-nav">
                        <ul className="client-resources-list">
                            <li>Why Slick?</li>
                            <li>Solutions</li>
                            <li>Resouces</li>
                            <li>Enterprise</li>
                            <li>Pricing</li>
                        </ul>
                        {navbar}
                    </nav>
                </header>
                <section className="splash-main">
                    <div className="splash-grid-container">
                        <h1>Imagine what you'll accomplish together</h1>
                        <img className="smallImage" src="https://source.unsplash.com/ZoAlN3-pJO8/251x251" alt="work-coffee"/>
                        <img className="bigImage" src="https://source.unsplash.com/fznQW-kn5VU/502x502" alt="designers"/>
                        <img className="midImage" src="https://source.unsplash.com/lp1AKIUV3yo/316x316" alt="consultants"/>
                        <p className="slick-blurb">Slick is a collaboration hub for work, no matter what work you do. It’s a place where conversations happen, decisions are made, and information is always at your fingertips. With Slick, your team is better connected.</p>
                        <SplashWorkspaceSignUpForm />
                    </div>
                </section>
            </>
        );
    }
}

export default Splash;