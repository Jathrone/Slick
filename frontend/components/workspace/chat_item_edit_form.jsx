import React from "react";

class ChatItemEditForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: this.props.message.body
        }
        debugger;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.clearMessageUnderEdit = this.clearMessageUnderEdit.bind(this);
    }
    
    clearMessageUnderEdit() {
        this.props.clearMessageUnderEdit();
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateMessage(this.state.body);
        this.clearMessageUnderEdit();
    }

    handleChange(e) {
        this.setState({
            body: e.currentTarget.value
        })
    }

    handleKeyDown(e) {
        if (e.target.scrollHeight < 50) {
            e.target.style.height = 44;
        } else {
            e.target.style.height = "1px";
            e.target.style.height = `${Math.min(e.target.scrollHeight, 300)}px`
        }
    }

    render() {
        
        return (
            <li className={`chat-item chat-item-header`}>
                <div className="chat-item-gutter">
                    <i key="icon" className="fas fa-th-large"></i>
                </div>
                <div className="chat-item-body">
                    <form
                        className="chat-edit-form"
                        onSubmit={this.handleSubmit}>
                        <textarea
                            ref={el => this.refTextArea = el}
                            id="main-chat-textarea"
                            value={this.state.body}
                            onChange={this.handleChange}
                            onKeyDown={this.handleKeyDown} />
                        <input type="button" value="Cancel" onClick={this.clearMessageUnderEdit}/>
                        <input type="submit" value="Save Changes"/>
                    </form>
                </div>
            </li>
        )
    }
} 

export default ChatItemEditForm;