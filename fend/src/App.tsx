import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Opportunity from "./components/opportunity/OpportunityView";
import "./App.scss";
import Welcome from "./components/welcome/Welcome";
import DashboardView from "./components/dashboard/DashboardView";

const App: React.FC = () => {
	return (
		<div>
			<header></header>
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
