import React from "react";
import { Link } from "react-router-dom";

class SignInForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            workspaceName: "",
            workspaceId: ""
        }
        this.handleWorkspaceAction = this.handleWorkspaceAction.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    componentDidMount() {
        this.props.clearAuthPageUi();
    }

    componentWillUnmount() {
        this.props.clearAuthPageUi();
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

    handleChange(field) {
        return (
            (e) => this.setState({
                [field]: e.currentTarget.value
            })
        )
    }

    render() {
        if (!this.state.workspaceId) {

            return (
                <>
                    <form className="auth-form" onSubmit={this.handleWorkspaceAction}>
                        <h2>Sign in to your workspace</h2>
                        <h6 className="form-blurb">Enter your workspace's Slick name</h6>
                        <input
                            type="text"
                            value={this.state.workspaceName}
                            placeholder="your-workspace-name"
                            onChange={this.handleChange("workspaceName")} />

                        <input type="submit" value="Continue" />
                    </form>
                    <section className="auth-page-bottom-section">
                        <p>Need to get your group started on Slack?
                        <Link to={{
                                pathname: "/get-started",
                                state: {
                                    getStarted: false
                                }
                            }}>Create a new workspace</Link></p>
                    </section>
                </>
            )
        } else {
            return (
                <>
                    <form className="auth-form" onSubmit={this.handleFormSubmit}>
                        <h2>Sign in to {this.state.workspaceName}</h2>
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
                        <input type="submit" value="Sign In" />
                    </form>
                    <section className="auth-page-bottom-section">
                        <p>Need to get your group started on Slack?
                        <Link to={{
                                pathname: "/get-started",
                                state: {
                                    getStarted: false
                                }
                            }}>Create a new workspace</Link></p>
                    </section>
                </>
            )
        }
    }
};

export default SignInForm;