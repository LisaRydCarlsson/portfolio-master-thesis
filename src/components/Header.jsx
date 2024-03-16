// components/Header.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styling/Header.scss";

const Header = () => {
	const [activePath, setActivePath] = useState("");

	const handleLinkClick = (path) => {
		setActivePath(path);
	};

	return (
		<header>
			<nav className="header__nav">
				<ul>
					<li>
						<Link
							to="/"
							onClick={() => handleLinkClick("/")}
							className={activePath === "/" ? "clicked" : ""}
						>
							HOME
						</Link>
					</li>
					<li>
						<Link
							to="/projects"
							onClick={() => handleLinkClick("/projects")}
							className={activePath === "/projects" ? "clicked" : ""}
						>
							PROJECTS
						</Link>
					</li>
					<li>
						<Link
							to="/about"
							onClick={() => handleLinkClick("/about")}
							className={activePath === "/about" ? "clicked" : ""}
						>
							ABOUT
						</Link>
					</li>
					<li>
						<Link
							to="/contact"
							onClick={() => handleLinkClick("/contact")}
							className={activePath === "/contact" ? "clicked" : ""}
						>
							CONTACT
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
