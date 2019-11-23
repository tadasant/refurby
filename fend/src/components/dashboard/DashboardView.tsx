import React from "react";
import { Button } from "@blueprintjs/core";
import { withRouter, RouteComponentProps } from "react-router";
import OpportunityCard from "./OpportunityCard";
import "./Dashboard.scss";
import { Opportunity } from "../../types";

interface Props extends RouteComponentProps {
	opportunities: Opportunity[];
}

const DashboardView: React.FC<Props> = props => {
	const { history } = props;
	return (
		<div className="dashboard__outer-container">
			<div className="dashboard__inner-container">
				<h3>
					Active Opportunities{" "}
					<Button
						className="add-new-opportunity-button"
						icon="plus"
						text="Broadcast New Opportunity"
						onClick={() => history.push("/opportunity")}
						intent="primary"
					/>
				</h3>
				{props.opportunities.map((opportunity, i) => (
					<OpportunityCard
						key={`opportunity_${i}`}
						opportunity={opportunity}
						className="dashboard__opportunity"
					/>
				))}
			</div>
		</div>
	);
};

export default withRouter(DashboardView);
