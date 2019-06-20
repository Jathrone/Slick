import { connect } from "react-redux";
import AuthErrorIndex from "./auth_error_index";

const mapStateToProps = (state) => ({
    errors: state.errors.session
});


export default connect(mapStateToProps)(AuthErrorIndex);
