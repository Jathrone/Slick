import React from "react";
import { errorsMapper } from "../../util/errors_mapper";

const AuthErrorIndexItem = ({error}) => {


    return (
        <li className="auth-page-error-item">{errorsMapper(error)}</li>
    )
}

export default AuthErrorIndexItem;