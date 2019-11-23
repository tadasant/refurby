import React from "react";
import { FormGroup, Checkbox, Button } from "@blueprintjs/core";
import { Opportunity } from "../../../types";
import { withRouter, RouteComponentProps } from "react-router";
import { OpportunityStep } from "../OpportunityView";
import Toaster from "../../toaster";

const IPhonePreview = require("../../../static/iphone.png");

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
			<h2>Preview</h2>
			<FormGroup label="Send anonymously?" inline>
				<Checkbox checked={sendAnonymously} onChange={handleToggle} />
			</FormGroup>
			<img style={{ width: "500px" }} src={IPhonePreview} alt="convo" />
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
		</div>
	);
};

export default withRouter(SendOpportunity);
