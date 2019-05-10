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
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="Channel name"
                    onChange={this.handleChange("name")}
                    value={this.state.name}/>
                <input
                    type="text"
                    placeholder="Channel topic (max 255 characters)"
                    onChange={this.handleChange("topic")}
                    value={this.state.topic} />
                <input
                    type="text"
                    placeholder="Channel purpose"
                    onChange={this.handleChange("purpose")}
                    value={this.state.purpose} />
                <button type="submit">Create Channel</button>
            </form>
        )
        }
    }
}
export default AddChannelForm;