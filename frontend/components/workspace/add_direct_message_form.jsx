import React from "react";
import Moment from "react-moment";
import { Redirect } from "react-router-dom";

class AddDirectMessageForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchText: "",
            users:[],
            redirectId: null
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAddUser = this.handleAddUser.bind(this);
        this.handleRemoveUser = this.handleRemoveUser.bind(this);
        this.handleText = this.handleText.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
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
            searchText: "",
            users: this.state.users.concat(userId)
        })
    }

    handleRemoveUser(userId) {
        this.setState({
            searchText: "",
            users: this.state.users.filter((id) => (id !== userId))
        })
    }

    handleText(e) {
        e.preventDefault();
        this.setState({
            searchText: e.currentTarget.value
        })
    }

    handleFocus() {
        this.searchInput.focus();
    }


    render() {

        let displayIndex = [];
        const directMessageIndex = [];
        const userIndex = [];
        const selectedUsers = new Array(this.state.users.length);
        let hintText;
        let hintClass;

        if (this.state.users.length < 8 && this.state.searchText) {
            hintText = "You can search users by username";
            hintClass = "hint hint-top";
            this.props.allUsers.forEach((user) => {
                if (this.state.users.indexOf(user.id) !== -1) {
                    selectedUsers[this.state.users.indexOf(user.id)]=(<li key={user.id}><button onClick={() => this.handleRemoveUser(user.id)}>{user.displayName} <i className="fas fa-times"></i></button></li>);
                }
                if (user.displayName.toLowerCase().includes(this.state.searchText.toLowerCase())) {
                    if (this.state.users.includes(user.id)) {
                        userIndex.push(
                            <li key={user.id}><button className="dummy-button"><i key="icon" className="fas fa-th-large"></i> {user.displayName}</button></li>
                        );
                    } else {
                        userIndex.push(
                            <li key={user.id}><button onClick={() => this.handleAddUser(user.id)}><i key="icon" className="fas fa-th-large"></i> {user.displayName}</button></li>
                        );
                    }
                }
            });
            displayIndex = userIndex;
        } else if (this.state.users.length === 0) {
            hintText = "Recent conversations"
            hintClass = "hint hint-bottom";
            let displayedUsers = [];
            const sortedDirectMessages = this.props.directMessages.sort(function compare(a, b) {
                const dateA = new Date(a.updatedAt);
                const dateB = new Date(b.updatedAt);
                return dateB - dateA;
            })
            sortedDirectMessages.forEach((directMessage) => {
                let participantNames = [];
                let participantIds = [];
    
                directMessage.participants.forEach((participant) => {
                    participantNames.push(participant.displayName);
                    participantIds.push(participant.id);
                })

                const directMessageSizeDiv = []
                if (directMessage.participants.length === 1) {
                    displayedUsers = displayedUsers.concat(directMessage.participants[0].id);
                } else {
                    directMessageSizeDiv.push( <div key="direct-message-size" className="direct-message-size">{directMessage.participants.length}</div> );
                }
                const directMessageTimestamp = new Date(directMessage.updatedAt);
    
                directMessageIndex.push(
                    <li key={`dm-${directMessage.id}`}>
                        <button className="direct-message-option" onClick={() => this.handleAddUser(participantIds)}>
                            <div className='user-item-info'>
                                <i key="icon" className="fas fa-th-large"></i>
                                {directMessageSizeDiv}
                                {participantNames.join(", ")}
                            </div>
                            <div className='user-item-timestamp'>
                                <Moment fromNow>{directMessageTimestamp}</Moment>
                            </div>
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
            displayIndex = directMessageIndex.concat(userIndex);
        } else if (this.state.users.length >= 8) {
            hintText = `You have reached the maximum number of participants`
            hintClass = "hint hint-top";
            this.props.allUsers.forEach((user) => {

                if (this.state.users.indexOf(user.id) !== -1) {
                    selectedUsers[this.state.users.indexOf(user.id)]=(<li key={user.id}><button onClick={() => this.handleRemoveUser(user.id)}>{user.displayName} <i className="fas fa-times"></i></button></li>);
                }
            });
        } else {
            hintText = `You can add ${Math.round(8 - this.state.users.length)} more people`
            hintClass = "hint hint-top";
            this.props.allUsers.forEach((user) => {
    
                if (this.state.users.indexOf(user.id) !== -1) {
                    selectedUsers[this.state.users.indexOf(user.id)]=(<li key={user.id}><button onClick={() => this.handleRemoveUser(user.id)}>{user.displayName} <i className="fas fa-times"></i></button></li>);
                    userIndex.push(
                        <li key={user.id}><button className="dummy-button"><i key="icon" className="fas fa-th-large"></i> {user.displayName}</button></li>
                    );
                } else {
                    userIndex.push(
                        <li key={user.id}><button onClick={() => this.handleAddUser(user.id)}><i key="icon" className="fas fa-th-large"></i> {user.displayName}</button></li>
                    );
                }
            });
            displayIndex = userIndex;
        }




        if (this.state.redirectId) {
            return (
                <Redirect to={`/direct_messages/${this.state.redirectId}`} />
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
                            <ul className="selected-users" onClick={this.handleFocus}>
                                { selectedUsers }
                                <input
                                ref={(ip) => this.searchInput = ip}
                                type='text'
                                onChange={this.handleText}
                                value={this.state.searchText}/>
                            </ul>
                            <button
                                type="submit"
                                value="Go"
                                onClick={this.handleSubmit}>Go</button>
                        </div>
                        <div className={hintClass}>
                            {hintText}
                        </div>
                        <ul className="all-users">
                            {displayIndex}
                        </ul>

                    </div>
                </div>
            )
        } 
    }
}
export default AddDirectMessageForm;