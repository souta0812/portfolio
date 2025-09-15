import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav>
            <Link to="/about">About</Link>
            <Link to="/works">Works</Link>
            <Link to="/connect">Connect</Link>
            <Link to="/skills">Skills</Link>
        </nav>
    );
}
