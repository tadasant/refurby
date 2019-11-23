import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Opportunity from "./components/opportunity/OpportunityView";
import "./App.scss";

const App: React.FC = () => {
	return (
		<div>
			<header></header>
			<Router>
				<Switch>
					<Route path="/welcome">{/* <Welcome/> */}</Route>
					<Route path="/dashboard">{/* <Dashboard/> */}</Route>
					<Route path="/contacts">{/* <Contacts /> */}</Route>
					<Route path="/opportunity">
						<Opportunity />
					</Route>
				</Switch>
			</Router>
		</div>
	);
};

export default App;
