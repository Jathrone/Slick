import { connect } from "react-redux";
import { getCurrentUser } from "../../reducers/users_selector";
import WorkspaceNavBar from "./workspace_nav_bar";

const mapStateToProps = (state) => ({
    currentUser: getCurrentUser(state)
})


export default connect(mapStateToProps)(WorkspaceNavBar);