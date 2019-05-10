import { connect } from "react-redux";
import { getCurrentUser, getWorkspaceUsers } from "../../reducers/users_selector";
import { getChannels } from "../../reducers/channels_selector";
import { getDirectMessages } from "../../reducers/direct_messages_selector";
import WorkspaceWrapper from "./workspace_wrapper";
import { fetchRelevantChannels, createChannel } from "../../actions/channels_actions";
import { fetchRelevantDirectMessages, createDirectMessage } from "../../actions/direct_messages_actions"; 
import { fetchRelevantUsers } from "../../actions/users_actions";

const mapStateToProps = (state) => {
    let currentUser = getCurrentUser(state)
    return {
    currentUser,
    channels: getChannels(state, currentUser.workspaceId),
    directMessages: getDirectMessages(state, currentUser.id),
    allUsers: getWorkspaceUsers(state, currentUser)
}}

const mapDispatchToProps = (dispatch) => ({
    fetchRelevantChannels: (workspaceId) => dispatch(fetchRelevantChannels(workspaceId)),
    createChannel: (name, topic, purpose, workspace_id) => dispatch(createChannel(name, topic, purpose, workspace_id)),
    fetchRelevantDirectMessages: (currentUserId) => dispatch(fetchRelevantDirectMessages(currentUserId)),
    fetchRelevantUsers: (workspaceId) => dispatch(fetchRelevantUsers(workspaceId)),
    createDirectMessage: (userIds) => dispatch(createDirectMessage(userIds))
})


export default connect(mapStateToProps, mapDispatchToProps)(WorkspaceWrapper);