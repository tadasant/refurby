import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Opportunity from "./components/opportunity/OpportunityView";
import "./App.scss";
import Welcome from "./components/welcome/Welcome";
import DashboardView from "./components/dashboard/DashboardView";
import RefurbyLogo from "./images/furby-logo-2.svg";
import { Navbar, Alignment, Colors, Icon } from "@blueprintjs/core";

const App: React.FC = () => {
	return (
		<div>
			<Navbar className="header">
				<Navbar.Group align={Alignment.LEFT}>
					<Navbar.Heading>
						<img className="header__logo" src={RefurbyLogo} alt="furby logo" />
					</Navbar.Heading>
				</Navbar.Group>
				<Navbar.Group align={Alignment.RIGHT}>
					<button className="bp3-button bp3-minimal nav-button">
						<Icon icon="person" color={Colors.WHITE} />
						<span className="navbar-text">Contacts</span>
					</button>
					<button className="bp3-button bp3-minimal nav-button">
						<Icon icon="briefcase" color={Colors.WHITE} />
						<span className="navbar-text">Opportunities</span>
					</button>
				</Navbar.Group>
			</Navbar>
			<Router>
				<Switch>
					<Route exact path="/">
						<Welcome />
					</Route>
					<Route path="/dashboard">
						<DashboardView />
					</Route>
					<Route path="/opportunity">
						<Opportunity />
					</Route>
				</Switch>
			</Router>
		</div>
	);
};

export default App;
