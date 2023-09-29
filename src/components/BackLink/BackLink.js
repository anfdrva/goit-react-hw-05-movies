import { NavLink } from "react-router-dom";
import { Link } from "./BackLink.styled";

const BackLink = ({ to }) => {
    return (
        // <link to={to}>Go back</link>
        <Link to={to}>Go back</Link>
    )
}

export default BackLink;