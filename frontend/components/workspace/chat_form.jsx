import React from "react";

class ChatForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onEnterPress = this.onEnterPress.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    handleChange(e) {
        this.setState({
            body: e.currentTarget.value 
        })
    }

    handleSubmit() {
        this.props.createMessage(this.state)
        this.setState({body: ""})
    }

    onEnterPress(e) {
        if (e.keyCode == 13 && e.shiftKey == false) {
            e.preventDefault();
            this.handleSubmit();
        }
    }

    // #TODO make this feature more responsive
    handleKeyDown(e) {
        this.onEnterPress(e);
        e.target.style.height = "inherit";
        e.target.style.height = `${Math.min(e.target.scrollHeight, (0.60*this.props.refMainChatSection.scrollHeight))}px`
        console.log({
            "target scrollHeight": e.target.scrollHeight,
            "60% of window": (0.60 * this.props.refMainChatSection.scrollHeight)
            })
    }


    render() {
        return(
            <form 
                className="main-chat-form"
                ref={el => this.chatFormRef = el}>
                <div className="main-chat-form-bar">
                    <button className="main-chat-form-button">
                        <i className="fas fa-plus"></i>
                    </button>
                    <textarea 
                        id="main-chat-textarea"
                        value={this.state.body}
                        onChange={this.handleChange}
                        onKeyDown={this.handleKeyDown}/>
                </div>
            </form>
        )
    }
}

export default ChatForm;