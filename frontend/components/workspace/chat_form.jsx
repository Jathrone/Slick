import React from "react";

class ChatForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: ""
        }
    }

    handleChange(e) {
        this.setState({
            body: e.currentTarget.value 
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.submitForm(this.state)
    }

    render() {
        <form onSubmit={this.handleSubmit}>
            <textarea 
                cols="30" 
                rows="10"
                value={this.state.body}
                onChange={this.handleChange}/>
        </form>
    }
}

export default ChatForm;