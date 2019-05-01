import React from "react";


// #TODO find way around 'double render'
const UserAuthFormWrapper = (props) => {
    const { fetchWorkspace, workspaceId} = props;
    if (!props.workspace) {
        fetchWorkspace(workspaceId)
    }
    return (
        <UserAuthForm {...props}/>
    );
}

class UserAuthForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            workspace_id: this.props.workspaceId,
            email: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(field) {
        return(
            (e) => {
                this.setState({
                    [field]: e.currentTarget.value
                })
            }
        )
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state)
    }

    render() {
        return (
            <div>
                <h4>{this.props.submitButtonText} to {(this.props.workspace) ? this.props.workspace.name : null}</h4>
                <h6>Enter your email address and password</h6>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        value={this.state.email}
                        id="email"
                        onChange={this.handleChange("email")}/>
                    <br/>
                    <label htmlFor="password">Password:</label>
                    <input 
                        type="password"
                        value={this.state.password} 
                        id="password"
                        onChange={this.handleChange("password")}/>
                    <input type="submit" value={this.props.submitButtonText}/>
                </form>
            </div>
        )
    }
}

export default UserAuthFormWrapper;