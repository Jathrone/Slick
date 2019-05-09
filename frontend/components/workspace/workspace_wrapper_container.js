import { connect } from "react-redux";
import { getCurrentUser } from "../../reducers/users_selector";
import { getChannels } from "../../reducers/channels_selector";
import WorkspaceWrapper from "./workspace_wrapper";
import { fetchRelevantChannels } from "../../actions/channels_actions";

const mapStateToProps = (state) => {
    let currentUser = getCurrentUser(state)
    return {
    currentUser,
    channels: getChannels(state, currentUser.workspaceId)
}}

const mapDispatchToProps = (dispatch) => ({
    fetchRelevantChannels: (workspaceId) => dispatch(fetchRelevantChannels(workspaceId))
})


export default connect(mapStateToProps, mapDispatchToProps)(WorkspaceWrapper);