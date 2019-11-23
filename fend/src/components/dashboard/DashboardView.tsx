import React from "react";
import { Button } from "@blueprintjs/core";
import { RouterProps, withRouter } from "react-router";
import OPPORTUNITIES from "../../data/opportunities";
import OpportunityCard from "./OpportunityCard";
import "./Dashboard.scss";

const DashboardView: React.FC<RouterProps> = props => {
	const { history } = props;
	return (
		<div>
			<Button text="Import Contacts" intent="none" />
			<Button
				text="Add Opportunity"
				onClick={() => history.push("/opportunity")}
				intent="primary"
			/>
			<h3>Active Opportunities</h3>
			{OPPORTUNITIES.map((opportunity, i) => (
				<OpportunityCard
					key={`opportunity_${i}`}
					opportunity={opportunity}
					className="dashboard__opportunity"
				/>
			))}
		</div>
	);
};

export default withRouter(DashboardView);
