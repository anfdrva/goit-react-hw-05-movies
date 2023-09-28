import { Link } from "react-router-dom";

const BackLink = ({ to }) => {
    return (
        // <link to={to}>Go back</link>
        <Link to={to}>Go back</Link>
    )
}

export default BackLink;