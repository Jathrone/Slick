import React from "react";
import { Link } from "react-router-dom";
import SplashWorkspaceSignUpForm from "./splash_workspace_sign_up_form";

class Splash extends React.Component {

    // componentDidMount() {
    //     this.props.allActiveWorkspacesIds.forEach(workspaceId => {
    //         this.props.fetchWorkspace(workspaceId);
    //     })
    // }

    render () {
        let navbar;
        if (this.props.loggedIn) {
            navbar = this.props.yourWorkspacesButton;
        } else {
            navbar = 
                <div className="auth-link-container">
                    <Link to={`/signin`}>Sign in</Link> 
                    <Link to={`/get-started`}>GET STARTED</Link>
                    <button className="splash-demo-button" onClick={this.props.signInDemoUser}>DEMO</button>
                </div>
        }

        return (
            <>
                <header className="splash-header">
                    <div className="slick-logo-div">
                        <Link to={`/`}><img src="https://cdn.brandfolder.io/5H442O3W/as/pl546j-7le8zk-199wkt/Slack_Mark.png?width=30" alt="slick but actually slack logo" /><div>slick</div></Link>
                    </div>
                    <nav className="splash-nav">
                        <ul className="client-resources-list">
                            <li><a href="https://github.com/Jathrone/Slick">Github</a></li>
                            <li><a href="https://www.linkedin.com/in/yucheng-jason-li/">LinkedIn</a></li>

                            {/* <li>Why Slick?</li>
                            <li>Solutions</li>
                            <li>Resources</li>
                            <li>Enterprise</li>
                            <li>Pricing</li> */}
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