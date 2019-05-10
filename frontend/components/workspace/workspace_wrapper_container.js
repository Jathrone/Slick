import { connect } from "react-redux";
import { getCurrentUser } from "../../reducers/users_selector";
import { getChannels } from "../../reducers/channels_selector";
import WorkspaceWrapper from "./workspace_wrapper";
import { fetchRelevantChannels, createChannel } from "../../actions/channels_actions";

const mapStateToProps = (state) => {
    let currentUser = getCurrentUser(state)
    return {
    currentUser,
    channels: getChannels(state, currentUser.workspaceId)
}}

const mapDispatchToProps = (dispatch) => ({
    fetchRelevantChannels: (workspaceId) => dispatch(fetchRelevantChannels(workspaceId)),
    createChannel: (name, topic, purpose, workspace_id) => dispatch(createChannel(name, topic, purpose, workspace_id))
})


export default connect(mapStateToProps, mapDispatchToProps)(WorkspaceWrapper);