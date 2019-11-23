import React, { useState } from "react";
import { withRouter, RouterProps } from "react-router";
import CreateOpportunity from "./create/CreateOpportunity";
import MatchList from "./match/MatchList";
import { Opportunity } from "../../types";
import { Button } from "@blueprintjs/core";

export enum OpportunityStep {
	CREATE,
	MATCH,
	CONFIRM
}

const OpportunityView: React.FC<RouterProps> = props => {
	const [opportunity, setOpportunity] = useState<Opportunity>({});
	const [step, setStep] = useState<OpportunityStep>(OpportunityStep.CREATE);

	const actionText = {
		[OpportunityStep.CREATE]: "Match",
		[OpportunityStep.MATCH]: "Preview",
		[OpportunityStep.CONFIRM]: "Send"
	}[step];

	const handleStepChange = () => {
		setStep(previousStep => {
			if (previousStep === OpportunityStep.CREATE) {
				return OpportunityStep.MATCH;
			} else if (previousStep === OpportunityStep.MATCH) {
				return OpportunityStep.CONFIRM;
			}
			props.history.push("/congrats");
			return previousStep;
		});
	};

	return (
		<div>
			<Button intent="primary" text={actionText} onClick={handleStepChange} />
			{step === OpportunityStep.CREATE && (
				<CreateOpportunity
					opportunity={opportunity}
					setOpportunity={setOpportunity}
				/>
			)}
			{step === OpportunityStep.MATCH && <MatchList />}
		</div>
	);
};

export default withRouter(OpportunityView);
