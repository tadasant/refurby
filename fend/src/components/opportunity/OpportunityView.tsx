import React, { useState } from "react";
import { withRouter, RouterProps } from "react-router";
import CreateOpportunity from "./create/CreateOpportunity";
import MatchList from "./match/MatchOpportunity";
import { Opportunity } from "../../types";
import { Button } from "@blueprintjs/core";
import SendOpportunity from "./send/SendOpportunity";

export enum OpportunityStep {
	CREATE,
	MATCH,
	CONFIRM
}

const OpportunityView: React.FC<RouterProps> = props => {
	const [opportunity, setOpportunity] = useState<Opportunity>({});
	const [step, setStep] = useState<OpportunityStep>(OpportunityStep.CREATE);
	const [sendAnonymously, setSendAnonymously] = useState<boolean>(true);

	const nextAction = {
		[OpportunityStep.CREATE]: "Choose Connections",
		[OpportunityStep.MATCH]: "Preview Broadcast",
		[OpportunityStep.CONFIRM]: "Send Broadcast"
	}[step];

	const handleNext = () => {
		setStep(previousStep => {
			if (previousStep === OpportunityStep.CREATE) {
				return OpportunityStep.MATCH;
			} else if (previousStep === OpportunityStep.MATCH) {
				return OpportunityStep.CONFIRM;
			}
			props.history.push("/dashboard");
			return previousStep;
		});
	};

	const handlePrevious = () => {
		setStep(previousStep => {
			if (previousStep === OpportunityStep.MATCH) {
				return OpportunityStep.CREATE;
			} else if (previousStep === OpportunityStep.CONFIRM) {
				return OpportunityStep.MATCH;
			}
			props.history.push("/dashboard");
			return previousStep;
		});
	};

	return (
		<div>
			<Button intent="none" text="Back" onClick={handlePrevious} />
			<Button intent="primary" text={nextAction} onClick={handleNext} />
			{step === OpportunityStep.CREATE && (
				<CreateOpportunity
					opportunity={opportunity}
					setOpportunity={setOpportunity}
				/>
			)}
			{step === OpportunityStep.MATCH && <MatchList />}
			{step === OpportunityStep.CONFIRM && (
				<SendOpportunity
					sendAnonymously={sendAnonymously}
					setSendAnonymously={setSendAnonymously}
					opportunity={opportunity}
				/>
			)}
		</div>
	);
};

export default withRouter(OpportunityView);
