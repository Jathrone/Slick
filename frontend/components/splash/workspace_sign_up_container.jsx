import React from "react";
import { connect } from "react-redux";
import { createWorkspace } from "../../actions/workspaces_actions";
import WorkspaceAuthForm from "./workspace_auth_form";


class WorkspaceSignUp extends React.Component {
    constructor(props) {
        super(props)

        // #TODO this logic allows state prefilling depending on previous route
        if (this.props.location.state) {
            this.state = {
                email: this.props.location.state.email,
                emailReady: this.props.location.state.emailReady
            }
        } else {
            this.state = {
                email: "",
                emailReady: false
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            email: e.currentTarget.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            emailReady: true
        })
    }

    render() {
        if (this.state.emailReady) {
            return (
                <WorkspaceAuthForm {...this.props} creator_email={this.state.email}/>
            )
        } else {
            return (
                <div>
                    <h4>Create a new workspace</h4>
                    <h6>To make a workspace from scratch, please confirm your email address</h6>
                    <form onSubmit={this.handleSubmit}>
                        <input
                            type="text" // #TODO consider changing to email
                            value={this.state.email}
                            onChange={this.handleChange}/>

                        <input type="submit" value="Confirm"/>
                    </form>
                </div>
            )
        }
    }
}


const mapStateToProps = state => ({
    formPath: "get-started"
})
const mapDispatchToProps = dispatch => ({
    action: (workspace) => dispatch(createWorkspace(workspace))
})

export default connect(mapStateToProps, mapDispatchToProps)(WorkspaceSignUp);