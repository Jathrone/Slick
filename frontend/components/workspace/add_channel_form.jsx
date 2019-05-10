import React from "react";
import { Redirect } from "react-router-dom"; 

class AddChannelForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name:"",
            topic:"",
            purpose:"",
            redirectId: undefined
        }
        this.handleSubmit = this.handleSubmit.bind(this);
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
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        placeholder="Channel name"
                        id="name"
                        onChange={this.handleChange("name")}
                        value={this.state.name}/>
                    <label htmlFor="topic">Topic (optional)</label>
                    <input
                        type="text"
                        placeholder="Channel topic (max 255 characters)"
                        id="topic"
                        onChange={this.handleChange("topic")}
                        value={this.state.topic} />
                    <label htmlFor="purpose">Purpose (optional)</label>
                    <input
                        type="text"
                        placeholder="Channel purpose"
                        id="purpose"
                        onChange={this.handleChange("purpose")}
                        value={this.state.purpose} />
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