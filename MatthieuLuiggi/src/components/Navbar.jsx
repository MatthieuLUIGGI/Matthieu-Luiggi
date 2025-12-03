import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<nav className="navbar">
			<Link to="/">Home</Link>
			<Link to="/ateliers-pratique">Ateliers</Link>
			<Link to="/participants">Participants</Link>
			<Link to="/contact">Contact</Link>
		</nav>
	);
}
