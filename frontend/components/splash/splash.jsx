import React from "react";
import { Link } from "react-router-dom";

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
                <>
                    <Link to={`/signin`}>Sign in</Link> 
                    <br/>
                    <Link to={`/get-started`}>GET STARTED</Link>
                </>
        }

        return (
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
        );
    }
}

export default Splash;