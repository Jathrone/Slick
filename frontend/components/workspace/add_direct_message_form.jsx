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
        const userIndex = [];
        const selectedUsers = [];
        this.props.allUsers.forEach((user) => {

            if (this.state.users.includes(user.id)) {
                selectedUsers.push(<li key={user.id}><button onClick={() => this.handleRemoveUser(user.id)}>{user.displayName}</button></li>)
            } else {
                userIndex.push(
                    <li key={user.id}><button onClick={() => this.handleAddUser(user.id)}>{user.displayName}</button></li>
                )
            }
        })



        if (this.state.redirectId) {
            return (
                <Redirect to={`/channels/${this.state.redirectId}`} />
            )
        } else {
            return (
                <>
                    <h1>Direct Messages</h1>
                    <ul>
                        { selectedUsers }
                    </ul>
                    <br/>
                    <ul>
                        {userIndex}
                    </ul>
                    <button
                        type="submit"
                        value="Go"
                        onClick={this.handleSubmit}>Go</button>
                    <button
                        type="input"
                        value="ESC"
                        onClick={this.props.handleResetActiveArea}>ESC</button>
                </>
            )
        }
    }
}
export default AddDirectMessageForm;