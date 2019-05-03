import React from "react";

class WrapperAuthForm extends React.Component {
    constructor(props) {
        super(props)
        let getStarted;
        let emailReady;
        let email = "";
        if (this.props.location.state) {
            if (this.props.location.state.getStarted !== undefined) {
                getStarted = this.props.location.state.getStarted;
            } else {
                getStarted = this.props.getStarted;
            }
            if (this.props.location.state.emailReady !== undefined) {
                emailReady = this.props.location.state.emailReady;
            } else {
                emailReady = this.props.emailReady;
            }
            if (this.props.location.state.email !== undefined) {
                email = this.props.location.state.email;
            }
        } else {
            getStarted = this.props.getStarted;
            emailReady = this.props.emailReady;
        }
        this.state = {
            email: email,
            password: "",
            workspaceName: "",
            workspaceId: "",
            emailReady: emailReady,
            getStarted: getStarted
        }
        this.handleWorkspaceAction = this.handleWorkspaceAction.bind(this);
        this.handleEmailReadyAction = this.handleEmailReadyAction.bind(this);
        this.handleGetStartedAction = this.handleGetStartedAction.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleChange(field) {
        return (
            (e) => this.setState({
                [field]: e.currentTarget.value
            })
        )
    }

    componentDidMount() {
        this.props.clearSessionErrors();
    }


    handleGetStartedAction() {
        this.setState({
            getStarted: false
        })
    }

    handleEmailReadyAction(e) { 
        e.preventDefault();
        this.setState({
            emailReady: true
        })
    }

    handleWorkspaceAction(e) {
        e.preventDefault();
        let workspace = {
            name: this.state.workspaceName,
            creator_email: this.state.email
        };
        this.props.workspaceAction(workspace)
            .then((res) => this.setState({ workspaceId: res.workspace.id }))
    };

    handleFormSubmit(e) {
        this.props.clearSessionErrors();
        e.preventDefault();
        let user = {
            workspace_id: this.state.workspaceId,
            email: this.state.email,
            password: this.state.password
        }
        this.props.formAction(user)
    }

    render() {
        if (this.state.getStarted) {
            return (
                <form className="auth-form">
                    <h2>Start with a workspace</h2>
                    <p>In Slick, everything happens in a workspace. Like a virtual 
                        office building, a workspace is where your team can 
                        gather in Slick to communicate and get work done.</p>
                    <div>
                        <i className="fas fa-search"></i>
                        <div>
                            <h6>Find your Slick workspace</h6>
                            <p>Sign up and join existing workspaces</p>
                        </div>
                        {/* #TODO add slideable icon here */}
                    </div>
                    <div onClick={this.handleGetStartedAction}>
                        <i className="fas fa-plus"></i>
                        <div>
                            <h6>Create a new workspace</h6>
                            <p>Get your company or organization on Slick.</p>
                        </div>
                    </div>
                </form>
            )
        } else if (!this.state.emailReady) {
            return (
                <form className="auth-form" onSubmit={this.handleEmailReadyAction}>
                    <h2>Create a new workspace</h2>
                    <h6 className="form-blurb">To make a workspace from scratch, please confirm your email
                        address</h6>
                    <input
                        type="text" // #TODO consider changing to email
                        value={this.state.email}
                        placeholder="you@example.com"
                        onChange={this.handleChange("email")} />

                    <input type="submit" value="Confirm" />
                </form>
            )
        } else if (!this.state.workspaceId) {
            const guideMessage = (this.props.submitButtonText === "Sign up") ? <h2 id="wrappable-h2">What's the name of your company or team?</h2> : <h2>Sign in to your workspace</h2>;
            const findYourWorkspaceLink = (this.props.submitButtonText === "Sign up") ? null : <div id="find-your-workspace-link">Don't know your workspace name? Find your workspace</div>;
            return (
                <form className="auth-form" onSubmit={this.handleWorkspaceAction}>
                    {guideMessage}
                    <h6 className="form-blurb">Enter your workspace's Slick name</h6>
                    <input
                        type="text"
                        value={this.state.workspaceName}
                        placeholder="your-workspace-name"
                        onChange={this.handleChange("workspaceName")} />
                        
                    <input type="submit" value="Continue" />

                    {findYourWorkspaceLink}
                </form>
            )
        } else {
            const guideMessage = (this.props.submitButtonText === "Sign up") ? "Sign up for " : "Sign in to";
            return (
                <form className="auth-form" onSubmit={this.handleFormSubmit}>
                    <h2>{guideMessage} {this.state.workspaceName}</h2>
                    <h6 className="form-blurb">Enter your <strong>email address</strong> and <strong>password</strong></h6>
                    <input
                        type="text"
                        value={this.state.email}
                        id="email"
                        placeholder="you@example.com"
                        onChange={this.handleChange("email")} />

                    <input
                        type="password"
                        value={this.state.password}
                        id="password"
                        placeholder="password"
                        onChange={this.handleChange("password")} />
                    <input type="submit" value={this.props.submitButtonText} />
                </form>
            )
        }
    }
};

export default WrapperAuthForm;