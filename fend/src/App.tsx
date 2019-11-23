import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Opportunity from "./components/opportunity/OpportunityView";
import "./App.scss";
import Welcome from "./components/welcome/Welcome";
import DashboardView from "./components/dashboard/DashboardView";
import Header from "./components/Header";
import { Opportunity as OpportunityType } from "./types";
import OPPORTUNITIES from "./data/opportunities";

const App: React.FC = () => {
	const [opportunities, setOpportunities] = useState<OpportunityType[]>(
		OPPORTUNITIES
	);
	return (
		<div className="appWrapper">
			<Router>
				<Switch>
					<Route exact path="/">
						<Welcome />
					</Route>
					<Route path="/dashboard">
						<Header />
						<DashboardView opportunities={opportunities} />
					</Route>
					<Route path="/opportunity">
						<Header />
						<Opportunity setOpportunities={setOpportunities} />
					</Route>
				</Switch>
			</Router>
		</div>
	);
};

export default App;
