import { connect } from "react-redux";
import { getCurrentUser } from "../../reducers/users_selector";
import WorkspaceWrapper from "./workspace_wrapper";

const mapStateToProps = (state) => ({
    currentUser: getCurrentUser(state)
})


export default connect(mapStateToProps)(WorkspaceWrapper);