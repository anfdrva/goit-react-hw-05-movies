import { Link } from "./BackLink.styled";

const BackLink = ({ to }) => {
    return (
        <Link to={to}>Go back</Link>
    );
};

export default BackLink;