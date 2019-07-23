import { connect } from "react-redux";
import ActiveWorkspaceList from "./active_workspace_list";
import { activateSession } from "../../actions/session_actions";
import { currentUserIdAndWorkspaceNames } from "../../reducers/modal_selectors";
import { closeLogInModal } from "../../actions/log_in_modal_actions";

const mapStateToProps = (state) => ({
    currentUserIdAndWorkspaceNames: currentUserIdAndWorkspaceNames(state)
});

const mapDispatchToProps = (dispatch) => ({
    activateSession: (userId) => dispatch(activateSession(userId)),
    closeLogInModal: () => dispatch(closeLogInModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(ActiveWorkspaceList);