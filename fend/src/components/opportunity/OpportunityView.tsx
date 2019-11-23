import React, { useState } from "react";
import CreateOpportunity from "./create/CreateOpportunity";
import { Opportunity } from "../../types";
import { Button } from "@blueprintjs/core";

export enum OpportunityStep {
	CREATE,
	MATCH,
	CONFIRM
}

const OpportunityView: React.FC = () => {
	const [opportunity, setOpportunity] = useState<Opportunity>({});
	const [step, setStep] = useState<OpportunityStep>(OpportunityStep.CREATE);

	const actionText = {
		[OpportunityStep.CREATE]: "Match",
		[OpportunityStep.MATCH]: "Preview",
		[OpportunityStep.CONFIRM]: "Send"
	}[step];

	return (
		<div>
			<Button intent="primary" text={actionText} />
			{step === OpportunityStep.CREATE && (
				<CreateOpportunity
					opportunity={opportunity}
					setOpportunity={setOpportunity}
					setStep={setStep}
				/>
			)}
		</div>
	);
};

export default OpportunityView;
