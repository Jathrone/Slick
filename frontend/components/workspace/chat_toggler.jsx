import React from 'react';

class ChatToggler extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            parentType: this.props.parentType,
            parentId: this.props.parentId
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.toggleMainWorkspace(this.state);
    }

    handleChange(field) {
        return (e) => {
            this.setState({
                [field]: e.currentTarget.value
            })
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    value={this.state.parentType}
                    onChange={this.handleChange("parentType")}/>
                <input 
                    type="number" 
                    value={this.state.parentId}
                    onChange={this.handleChange("parentId")}/>
                <input type="submit" value="toggle workspace"/>
            </form>
        )
    }
}

export default ChatToggler;