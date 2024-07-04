import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser } from "@fortawesome/free-solid-svg-icons";

library.add( faUser )

function AccountLoginButton () {
    return (
        <Link to="/account_login"><FontAwesomeIcon icon="fa fa-user" /></Link>
    )
}

export default AccountLoginButton