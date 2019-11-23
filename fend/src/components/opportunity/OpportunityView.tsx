import React, { useState } from "react";
import { withRouter, RouterProps } from "react-router";
import CreateOpportunity from "./create/CreateOpportunity";
import MatchList from "./match/MatchOpportunity";
import { Opportunity } from "../../types";
import SendOpportunity from "./send/SendOpportunity";
import "./Opportunity.scss";

export enum OpportunityStep {
	CREATE,
	MATCH,
	CONFIRM
}

const OpportunityView: React.FC<RouterProps> = props => {
	const [opportunity, setOpportunity] = useState<Opportunity>({});
	const [step, setStep] = useState<OpportunityStep>(OpportunityStep.CREATE);
	const [sendAnonymously, setSendAnonymously] = useState<boolean>(true);

	return (
		<div className="opportunity__outer-container">
			<div className="opportunity__inner-container">
				{step === OpportunityStep.CREATE && (
					<CreateOpportunity
						opportunity={opportunity}
						setOpportunity={setOpportunity}
						setStep={setStep}
					/>
				)}
				{step === OpportunityStep.MATCH && <MatchList setStep={setStep} />}
				{step === OpportunityStep.CONFIRM && (
					<SendOpportunity
						sendAnonymously={sendAnonymously}
						setSendAnonymously={setSendAnonymously}
						opportunity={opportunity}
						setStep={setStep}
					/>
				)}
			</div>
		</div>
	);
};

export default withRouter(OpportunityView);
