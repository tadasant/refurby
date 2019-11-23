import React from "react";
import { Navbar, Icon, Alignment, Colors } from "@blueprintjs/core";
import RefurbyLogo from "../images/furby-logo-2.svg";
import { withRouter, RouterProps } from "react-router";

const Header: React.FC<RouterProps> = ({ history }) => {
	return (
		<Navbar className="header">
			<Navbar.Group align={Alignment.LEFT}>
				<Navbar.Heading>
					<img
						className="header__logo"
						src={RefurbyLogo}
						alt="furby logo"
						onClick={() => history.push("/")}
					/>
				</Navbar.Heading>
				<button className="bp3-button bp3-minimal nav-button">
					<Icon icon="people" color={Colors.WHITE} />
					<span className="navbar-text">Contacts</span>
				</button>
				<button
					className="bp3-button bp3-minimal nav-button"
					onClick={() => history.push("/dashboard")}
				>
					<Icon icon="briefcase" color={Colors.WHITE} />
					<span className="navbar-text">Opportunities</span>
				</button>
			</Navbar.Group>
			<Navbar.Group align={Alignment.RIGHT}>
				<button className="bp3-button bp3-minimal nav-button">
					<Icon icon="user" color={Colors.WHITE} />
					<span className="navbar-text">Tadas Antanavicius</span>
				</button>
			</Navbar.Group>
		</Navbar>
	);
};

export default withRouter(Header);
