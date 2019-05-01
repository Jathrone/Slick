import { connect } from "react-redux";
import Splash from "./splash";

// #TODO ask why state.session.allCurrentUsersIds !== []
const mapStateToProps = (state) => {
    return {
    loggedIn: !(state.session.allCurrentUsersIds.length === 0)
    };
}

export default connect(mapStateToProps)(Splash);
