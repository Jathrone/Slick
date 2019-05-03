import React from "react";
import { Redirect, Link } from "react-router-dom";

class SplashWorkspaceSignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: "", redirect: false};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({email: e.currentTarget.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({redirect:true});
    }

    render(){
        if (this.state.redirect) {
            return <Redirect to={{
                pathname: "/get-started",
                state: {
                    email: this.state.email,
                    emailReady: true
                }}}/>
        }
        return (
            <form className="splash-main-get-started-form" onSubmit={this.handleSubmit}>
                <input
                    id="email" 
                    type="text"
                    value={this.state.email}
                    placeholder="Email address"
                    onChange={this.handleChange}/>
                
                <input id="submit" type="submit" value="GET STARTED"/>
                <br/>
                <p>Already using Slick? <Link to="/signin">Sign in</Link>.</p>
            </form>
        )
    }
}

export default SplashWorkspaceSignUpForm;