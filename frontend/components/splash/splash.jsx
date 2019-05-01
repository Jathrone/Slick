import React from "react";
import { Link } from "react-router-dom";

class Splash extends React.Component {

    render () {
        const navbar = ((this.props.loggedIn) 
        ? 
        <h6>This will display when Logged In</h6> 
        : 
        <>
           <Link to={`/signin`}>Sign in</Link> 
           <br/>
           <Link to={`/get-started`}>GET STARTED</Link>
        </>
        )

        return (
            <main>
                <h2>Top to Splash.jsx</h2>
                <header>
                    < Link to={`/`}>slick</Link>
                    <ul>
                        <li>Why Slick?</li>
                        <li>Solutions</li>
                        <li>Resouces</li>
                        <li>Enterprise</li>
                        <li>Pricing</li>
                    </ul>
                    {navbar}
                </header>
            </main>
        );
    }
}

export default Splash;