import React from "react";
import {
	FormGroup,
	Checkbox,
	Button,
	Card,
	Elevation
} from "@blueprintjs/core";
import { Opportunity } from "../../../types";
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
}

const SendOpportunity: React.FC<Props> = ({
	opportunity,
	sendAnonymously,
	setSendAnonymously,
	history,
	setStep
}) => {
	const handleToggle = () => {
		setSendAnonymously(prevState => !!!prevState);
	};

	const handleSubmit = () => {
		async function sendTexts() {
			// await fetch("url", {
			//   method: 'POST', // *GET, POST, PUT, DELETE, etc.
			//   headers: {
			//     'Content-Type': 'application/json'
			//     // 'Content-Type': 'application/x-www-form-urlencoded',
			//   },
			//   body: JSON.stringify(opportunity) // body data type must match "Content-Type" header
			// });
		}
		sendTexts();
		Toaster.show({ message: "Successful broadcast!", intent: "success" });
		history.push("/dashboard");
	};

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
