import React from "react";
import AuthErrorIndexItem from "./auth_error_index_item";

const AuthErrorIndex = ({errors}) => {
    if (errors.length > 0) {
        return (
            <ul className="auth-page-errors-container">
                {errors.map((error, idx) => <AuthErrorIndexItem key={idx} error={error}/>)}
            </ul>
        )
    } else {
        return (null)
    }
}

export default AuthErrorIndex;