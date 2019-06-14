import React from "react";
import { Redirect } from "react-router-dom";

class AddDirectMessageForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users:[],
            redirectId: null
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAddUser = this.handleAddUser.bind(this);
        this.handleRemoveUser = this.handleRemoveUser.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createDirectMessage(this.state.users)
            .then(res => {
                this.setState({
                    redirectId: res.directMessage.id
                })
            })
    }


    componentDidUpdate(prevProps, prevState) {
        if (prevState.redirectId !== this.state.redirectId) {
            this.props.handleResetActiveArea();
        }
    }

    handleAddUser(userId){
        this.setState({
            users: this.state.users.concat(userId)
        })
    }

    handleRemoveUser(userId) {
        this.setState({
            users: this.state.users.filter((id) => (id !== userId))
        })
    }


    render() {

        const directMessageIndex = [];
        const userIndex = [];
        const selectedUsers = [];

        if (this.state.users.length === 0) {
            let displayedUsers = [];

            this.props.directMessages.forEach((directMessage) => {
                let participantNames = [];
                let participantIds = [];
    
                directMessage.participants.forEach((participant) => {
                    participantNames.push(participant.displayName);
                    participantIds.push(participant.id);
                })

                if (directMessage.participants.length === 1) {
                    displayedUsers = displayedUsers.concat(directMessage.participants[0].id);
                }
    
                directMessageIndex.push(
                    <li key={`dm-${directMessage.id}`}>
                        <button onClick={() => this.handleAddUser(participantIds)}>
                            <div>{directMessage.participants.length}</div>
                            {participantNames.join(", ")}
                        </button>
                    </li>
                ) 
            });

            this.props.allUsers.forEach((user) => {
                if (!displayedUsers.includes(user.id)) {
                    userIndex.push(
                        <li key={user.id}><button onClick={() => this.handleAddUser(user.id)}><i key="icon" className="fas fa-th-large"></i> {user.displayName}</button></li>
                    );
                }
            });
        } else {
            this.props.allUsers.forEach((user) => {
    
                if (this.state.users.includes(user.id)) {
                    selectedUsers.push(<li key={user.id}><button onClick={() => this.handleRemoveUser(user.id)}>{user.displayName} <i className="fas fa-times"></i></button></li>);
                } else {
                    userIndex.push(
                        <li key={user.id}><button onClick={() => this.handleAddUser(user.id)}><i key="icon" className="fas fa-th-large"></i> {user.displayName}</button></li>
                    );
                }
            });
        }




        if (this.state.redirectId) {
            return (
                <Redirect to={`/direct_messages/${this.state.redirectId}`} />
            )
        } else if (selectedUsers.length > 0) {
            return (
                <div className="add-direct-message-page">
                    <div className="escape-div">
                        <button
                        type="input"
                        value="ESC"
                        onClick={this.props.handleResetActiveArea}>
                        <i className="fas fa-times"></i>ESC</button>
                    </div>
                    <div className="add-direct-message-form">
                        <h1 className="add-direct-message-header">Direct Messages</h1>
                        <div className="selected-users-bar">
                            <ul className="selected-users">
                                { selectedUsers }
                            </ul>
                            <button
                                type="submit"
                                value="Go"
                                onClick={this.handleSubmit}>Go</button>
                        </div>
                        <br/>
                        <ul className="all-users">
                            {userIndex}
                        </ul>

                    </div>
                </div>
            )
        } else {
            return (
                <div className="add-direct-message-page">
                    <div className="escape-div">
                        <button
                            type="input"
                            value="ESC"
                            onClick={this.props.handleResetActiveArea}>
                            <i className="fas fa-times"></i>ESC</button>
                    </div>
                    <div className="add-direct-message-form">
                        <h1 className="add-direct-message-header">Direct Messages</h1>
                        <div className="selected-users-bar">
                            <ul className="selected-users">
                                {selectedUsers}
                            </ul>
                            <button
                                type="submit"
                                value="Go"
                                onClick={this.handleSubmit}>Go</button>
                        </div>
                        <br />
                        <ul className="all-users">
                            {directMessageIndex}
                            {userIndex}
                        </ul>

                    </div>
                </div>
            )
        }
    }
}
export default AddDirectMessageForm;