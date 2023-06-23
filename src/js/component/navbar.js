import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3 ps-5 pe-5">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Starwars</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Favorites(0)</button>
				</Link>
			</div>
		</nav>
	);
};
