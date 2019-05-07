import React from "react";

class ChatForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            body: e.currentTarget.value 
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createMessage(this.state)
        this.setState({body: ""})
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <textarea 
                    cols="30" 
                    rows="10"
                    value={this.state.body}
                    onChange={this.handleChange}/>
                <input type="submit" value="submit"/>
            </form>
        )
    }
}

export default ChatForm;