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
        this.props.createMessage(this.state.body)
        this.setState({body: ""})
    }

    onEnterPress(e) {
        if (e.keyCode == 13 && e.shiftKey == false) {
            e.preventDefault();
            this.handleSubmit();
        }
    }

    // #TODO make this feature more responsive
    // #TODO form bar needs to come back to 44px after clearing
    handleKeyDown(e) {
        this.onEnterPress(e);
        if (e.target.scrollHeight < 50) {
            e.target.style.height = 44;
            // e.target.style.height = `${Math.min(e.target.scrollHeight, 0.5 * this.props.maxChatHeight) - 9}px`
        } else {
            e.target.style.height = "1px";
            e.target.style.height = `${Math.min(e.target.scrollHeight, 0.5 * this.props.refMainChatSection.scrollHeight)}px`
        }
        console.log({ scrollHeight: e.target.scrollHeight,
            "style.height": e.target.style.height})
    }

    render() {
        return(
            <form 
                className="main-chat-form"
                ref={el => this.chatFormRef = el}>
                <div className="main-chat-form-bar">
                    <div className="chat-form-plus-button">
                        <i className="fas fa-plus"></i>
                    </div>
                    <textarea 
                        ref = {el => this.refTextArea = el}
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