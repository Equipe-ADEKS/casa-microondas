import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import LoggedInUser from "../pages/loggedin_user.jsx";

library.add( faUser )

function AccountLoggedButton () {
    return (
        <Link to="/loggedin_account"><FontAwesomeIcon icon="fa fa-user" /></Link>
    )
}

export default AccountLoggedButton