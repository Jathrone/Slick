import React from "react";

class WorkspaceAuthForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            creator_email: this.props.creator_email
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    //  #TODO priority test .then((workspace) => ...) when action returns error object
    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state)
            .then((res) => {
                
                this.props.history.push(`/${this.props.formPath}/${res.workspace.id}`)
        })
    }

    handleChange(e) {
        this.setState({
            name: e.currentTarget.value
        })
    }

    render () {
        return (
            <div>
                <h4>Sign in to your workspace</h4>
                <h6>Enter your workspace's Slick name</h6>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={this.state.name}
                        onChange={this.handleChange}/>
                    <br/>
                    <input type="submit" value="Continue"/>
                </form>
            </div>
        )
    }
}

export default WorkspaceAuthForm;