import React from "react";
import { Redirect } from "react-router-dom"; 

class AddChannelForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name:"",
            topic:"",
            purpose:"",
            searchText: "",
            redirectId: undefined,
            users: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAddUser = this.handleAddUser.bind(this);
        this.handleRemoveUser = this.handleRemoveUser.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
    }

    handleAddUser(userId) {
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

    handleFocus() {
        this.searchInput.focus();
    }

    handleChange(field) {
        return (
                (e) => (
                this.setState({
                    [field]: e.currentTarget.value
                })
            )
        )
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createChannel(this.state)
            .then(res => {
                this.setState({
                    redirectId: res.channel.id
                })
            })
    }


    componentDidUpdate(prevProps, prevState) {
        if (prevState.redirectId !== this.state.redirectId) {
            this.props.handleResetActiveArea();
        }
    }



    render() {

        const userIndex = [];
        const selectedUsers = new Array(this.state.users.length);
        this.props.allUsers.forEach((user) => {
            if (this.state.users.indexOf(user.id) !== -1) {
                selectedUsers[this.state.users.indexOf(user.id)] = (<li key={user.id}><button onClick={() => this.handleRemoveUser(user.id)}>{user.displayName} <i className="fas fa-times"></i></button></li>);
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
        if (this.state.redirectId) {
            return (
                <Redirect to={`/channels/${this.state.redirectId}`}/>
            )
        } else {
        return (
            <div className="add-channel-page">
                <div className="escape-div">
                    <button
                        type="input"
                        value="ESC"
                        onClick={this.props.handleResetActiveArea}>
                        <i className="fas fa-times"></i>ESC</button>
                </div>
                <form onSubmit={this.handleSubmit} className="add-channel-form">
                    <h1 className="add-channel-header">Create a channel</h1>
                    <br/>
                    <p className="hint-paragraph">Channels are where your members communicate. They're best when organized around a topic —
                        #marking, for example. 
                    </p>
                    <label htmlFor="name">Name</label>
                    <div className="input-box">
                        <span>#</span>
                        <input
                            type="text"
                            placeholder="e.g. marketing"
                            id="name"
                            onChange={this.handleChange("name")}
                            value={this.state.name}/>
                    </div>
                    <p className="input-descriptor">Names should be lowercase, without spaces or periods, and shorter than 22 characters</p>
                    {/* <label htmlFor="topic">Topic (optional)</label>
                    <div className="input-box">
                        <input
                            type="text"
                            placeholder="Channel topic (max 255 characters)"
                            id="topic"
                            onChange={this.handleChange("topic")}
                            value={this.state.topic} />
                    </div> */}
                    <label htmlFor="purpose">Purpose (optional)</label>
                    <div className="input-box">
                        <input
                            type="text"
                            id="purpose"
                            onChange={this.handleChange("purpose")}
                            value={this.state.purpose} />
                    </div>
                    <p className="input-descriptor">What is this channel about?</p>
                    {/* <label htmlFor="search">Send invites to (optional)</label>
                    <ul className="input-box selected-users" onClick={this.handleFocus}>
                        {selectedUsers}
                        <input
                            ref={(ip) => this.searchInput = ip}
                            type='text'
                            id="search"
                            onChange={this.handleChange("searchText")}
                            value={this.state.searchText}/>
                        <ul className="all-users">
                            {userIndex}
                        </ul>
                    </ul> */}
                    <div className="add-channel-button-wrapper">
                        <button type="submit">Create Channel</button>
                    </div>
                </form>
            </div>
        )
        }
    }
}
export default AddChannelForm;