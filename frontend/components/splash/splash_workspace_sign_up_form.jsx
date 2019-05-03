import React from "react";
import { Link } from "react-router-dom";

class SplashWorkspaceSignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: ""};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({email: e.currentTarget.value});
    }

    render(){
        return (
            <form className="splash-main-get-started-form">
                <input 
                    type="text"
                    value={this.state.email}
                    onChange={this.handleChange}/>
                
                <Link to={{
                    pathname: "/get-started",
                    state: {
                        email: this.state.email,
                        emailReady: true
                    }
                }}>GET STARTED</Link>
            </form>
        )
    }
}

export default SplashWorkspaceSignUpForm;