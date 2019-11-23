import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Opportunity from "./components/opportunity/OpportunityView";
import "./App.scss";
import Welcome from "./components/welcome/Welcome";
import DashboardView from "./components/dashboard/DashboardView";
import Header from "./components/Header";

const App: React.FC = () => {
	return (
		<div className="appWrapper">
			<Router>
				<Switch>
					<Route exact path="/">
						<Welcome />
					</Route>
					<Route path="/dashboard">
						<Header />
						<DashboardView />
					</Route>
					<Route path="/opportunity">
						<Header />
						<Opportunity />
					</Route>
				</Switch>
			</Router>
		</div>
	);
};

export default App;
