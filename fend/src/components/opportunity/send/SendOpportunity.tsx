import React, { useState } from "react";
import {
	FormGroup,
	Checkbox,
	Button,
	Card,
	Elevation,
	Icon,
	Spinner
} from "@blueprintjs/core";
import { Opportunity, Match } from "../../../types";
import { withRouter, RouteComponentProps } from "react-router";
import { OpportunityStep } from "../OpportunityView";
import Toaster from "../../toaster";
import "./SendOpportunity.scss";
import ActionBar from "../ActionBar";

const IPhonePreview = require("../../../static/iphone.png");
const WhiteFurby = require("../../../images/furby-white.png");

interface Props extends RouteComponentProps<any> {
	opportunity: Opportunity;
	sendAnonymously: boolean;
	setSendAnonymously: (value: boolean | ((value: boolean) => boolean)) => void;
	setStep: (value: OpportunityStep) => void;
	chosenRecipientIds: number[];
	matches: Match[];
	setOpportunities: React.Dispatch<React.SetStateAction<Opportunity[]>>;
}

const SendOpportunity: React.FC<Props> = ({
	opportunity,
	sendAnonymously,
	setSendAnonymously,
	history,
	setStep,
	chosenRecipientIds,
	matches,
	setOpportunities
}) => {
	const [loadingTimerIsSet, setLoadingTimerIsSet] = useState<boolean>(false);

	const handleToggle = () => {
		setSendAnonymously(prevState => !!!prevState);
	};

	const handleSubmit = () => {
		async function sendTexts() {
			// await fetch("url", {
			// 	method: "POST",
			// 	headers: {
			// 		"Content-Type": "application/json"
			// 	},
			// 	body: JSON.stringify({
			// 		...opportunity
			// 	}) // body data type must match "Content-Type" header
			// });
		}
		sendTexts();
		setLoadingTimerIsSet(true);
		setTimeout(() => {
			Toaster.show({ message: "Successful broadcast!", intent: "success" });
			setOpportunities(opportunities => [
				...opportunities,
				{
					...opportunity,
					stats: {
						conversations: 0,
						lastSent: new Date(),
						moneyMade: "$0",
						outgoing: chosenRecipientIds.length,
						referrals: 0
					}
				}
			]);
			history.push("/dashboard");
		}, 2500 + Math.random() * 1000);
	};

	if (loadingTimerIsSet) {
		return (
			<div>
				<img className="peeking-furby" src={WhiteFurby} alt="white-furby" />
				<Spinner intent="success" className="central-spinner" />
				<h4>Distributing SMS...</h4>
			</div>
		);
	}

	return (
		<div>
			<img className="peeking-furby" src={WhiteFurby} alt="white-furby" />
			<Card
				elevation={Elevation.THREE}
				className="send-opportunity__card send-opportunity__container"
			>
				<h2 className="send-header">Broadcast Preview</h2>
				<FormGroup label="Send anonymously?" inline>
					<Checkbox checked={sendAnonymously} onChange={handleToggle} />
				</FormGroup>
				<img className="preview-convo" src={IPhonePreview} alt="convo" />
				<Icon className="arrow-icon" icon="arrow-down" />
				<div className="recipients-icons">
					{chosenRecipientIds.map(id => (
						<div>
							<img
								alt="person"
								className="match-name"
								src={matches.find(match => match.id === id)!.imageUrl}
							/>
						</div>
					))}
				</div>
			</Card>
			<ActionBar>
				<Button
					intent="none"
					text="Back"
					onClick={() => setStep(OpportunityStep.MATCH)}
				/>
				<Button
					intent="primary"
					text="Send Broadcast via SMS"
					onClick={handleSubmit}
				/>
			</ActionBar>
		</div>
	);
};

export default withRouter(SendOpportunity);
