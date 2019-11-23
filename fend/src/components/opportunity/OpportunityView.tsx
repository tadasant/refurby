import React, { useState } from "react";
import { withRouter, RouteComponentProps } from "react-router";
import CreateOpportunity from "./create/CreateOpportunity";
import MatchList from "./match/MatchOpportunity";
import { Opportunity } from "../../types";
import SendOpportunity from "./send/SendOpportunity";
import "./Opportunity.scss";
import MATCHES from "../../data/matches";

export enum OpportunityStep {
	CREATE,
	MATCH,
	CONFIRM
}

interface Props extends RouteComponentProps {
	setOpportunities: React.Dispatch<React.SetStateAction<Opportunity[]>>;
}

const OpportunityView: React.FC<Props> = props => {
	const [opportunity, setOpportunity] = useState<Opportunity>({});
	const [step, setStep] = useState<OpportunityStep>(OpportunityStep.CREATE);
	const [sendAnonymously, setSendAnonymously] = useState<boolean>(true);
	const [chosenRecipientIds, setChosenRecipientIds] = useState<number[]>([]);

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
				{step === OpportunityStep.MATCH && (
					<MatchList
						chosenRecipientIds={chosenRecipientIds}
						setChosenRecipientIds={setChosenRecipientIds}
						setStep={setStep}
					/>
				)}
				{step === OpportunityStep.CONFIRM && (
					<SendOpportunity
						sendAnonymously={sendAnonymously}
						setSendAnonymously={setSendAnonymously}
						opportunity={opportunity}
						setStep={setStep}
						chosenRecipientIds={chosenRecipientIds}
						matches={MATCHES}
						setOpportunities={props.setOpportunities}
					/>
				)}
			</div>
		</div>
	);
};

export default withRouter(OpportunityView);
