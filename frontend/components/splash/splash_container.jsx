import { connect } from "react-redux";
import Splash from "./splash";

const mapStateToProps = (state) => ({
    loggedIn: Boolean(state.session.currentUserId)
})

export default connect(mapStateToProps)(Splash);
