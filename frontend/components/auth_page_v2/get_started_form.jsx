import React from "react";

class GetStartedForm extends React.Component {
    constructor(props) {
        super(props);
        let email;
        if (this.props.location.state) {
            if (this.props.location.state.email !== undefined) {
                email = this.props.location.state.email;
            } else {
                email = "";
            }
        } else {
            email = "";
        }
        this.state = {
            email,
            password: "",
            workspaceName: "",
            workspaceId: ""
        }
        this.handleGetStartedAction = this.handleGetStartedAction.bind(this);
        this.handleFindWorkspace = this.handleFindWorkspace.bind(this);
        this.handleEmailReadyAction = this.handleEmailReadyAction.bind(this);
        this.handleWorkspaceAction = this.handleWorkspaceAction.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleSelectWorkspace = this.handleSelectWorkspace.bind(this);
    }

    componentDidMount() {
        let getStarted;
        let findWorkspace;
        let emailReady;
        if (this.props.location.state) {
            if (this.props.location.state.getStarted !== undefined) {
                getStarted = this.props.location.state.getStarted;
            } else {
                getStarted=true;
            }

            if (this.props.location.state.findWorkspace !== undefined) {
                findWorkspace = this.props.location.state.findWorkspace;
            } else {
                findWorkspace=false;
            }

            if (this.props.location.state.emailReady !== undefined) {
                emailReady = this.props.location.state.emailReady;
            } else {
                emailReady = false;
            }
        } else {
            getStarted=true;
            findWorkspace=false;
            emailReady = false;
        }
        this.props.receiveAuthPageUi({
            findWorkspace,
            getStarted,
            emailReady
        })

        this.props.fetchAllWorkspaces();
    }

    componentWillUnmount() {
        this.props.clearAuthPageUi();
    }

    handleChange(field) {
        return (
            (e) => this.setState({
                [field]: e.currentTarget.value
            })
        )
    }
    
    handleFindWorkspace() {
        this.props.receiveAuthPageUi({
            getStarted: false,
            findWorkspace: true
        })
    }

    handleGetStartedAction() {
        this.props.receiveAuthPageUi({
            getStarted: false
        })
    }

    handleEmailReadyAction(e) {
        e.preventDefault();
        this.setState({
            workspaceId: "",
            workspaceName: ""
        })
        this.props.receiveAuthPageUi({
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

    handleSelectWorkspace({workspaceId, workspaceName}) {
        this.props.receiveAuthPageUi({
            emailReady: true,
            findWorkspace: false,
            getStarted: false
        })
        this.setState({
            workspaceId,
            workspaceName
        })
    }


    render() {
        if (this.props.authPageUi.getStarted) {
            return (
                <form className="auth-form">
                    <h2>Start with a workspace</h2>
                    <p>In Slick, everything happens in a workspace. Like a virtual
                        office building, a workspace is where your team can
                        gather in Slick to communicate and get work done.</p>
                    <div className="get-started-button" onClick={this.handleFindWorkspace}>
                        <i className="fas fa-search"></i>
                        <div>
                            <h6>Find your Slick workspace</h6>
                            <p>Sign up and join existing workspaces</p>
                        </div>
                        {/* #TODO add slideable icon here */}
                    </div>
                    <div className="get-started-button" onClick={this.handleGetStartedAction}>
                        <i className="fas fa-plus"></i>
                        <div>
                            <h6>Create a new workspace</h6>
                            <p>Get your company or organization on Slick.</p>
                        </div>
                    </div>
                </form>
            )
        } else if (this.props.authPageUi.findWorkspace) {
            return(
                <form className="auth-form">
                    <h2>Find your Slick workspace</h2>
                    <p>Sign up for a workspace from the list of existing public workspaces below</p>
                    <div className="all-available-workspaces">
                        {this.props.allWorkspaces.map((workspace) => {
                            return (
                                <div 
                                    className="available-workspace" 
                                    key={workspace.id}
                                    onClick={() => this.handleSelectWorkspace({workspaceId: workspace.id,
                                                                workspaceName:workspace.name})}>{workspace.name}</div>
                            )
                        })}
                    </div>
                </form>
            )
        } else if (!this.props.authPageUi.emailReady) {
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
            
            return (
                <>
                    <form className="auth-form" onSubmit={this.handleWorkspaceAction}>
                        <h2 id="wrappable-h2">What's the name of your company or team?</h2>
                        <h6 className="form-blurb">Enter your workspace's Slick name</h6>
                        <input
                            type="text"
                            value={this.state.workspaceName}
                            placeholder="your-workspace-name"
                            onChange={this.handleChange("workspaceName")} />

                        <input type="submit" value="Continue" />

                        <div id="find-your-workspace-link">Don't know your workspace name? Find your workspace</div>
                    </form>
                </>
            )
        } else {
            return (
                <>
                    <form className="auth-form" onSubmit={this.handleFormSubmit}>
                        <h2>Sign up for {this.state.workspaceName}</h2>
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
                        <input type="submit" value="Sign Up" />
                    </form>
                </>
            )
        }
    }
}

export default GetStartedForm;