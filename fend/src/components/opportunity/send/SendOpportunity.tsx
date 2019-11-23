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
				onClick={() => {
					Toaster.show({ message: "Successfully broadcasted!  " });
					history.push("/dashboard");
				}}
			/>
		</div>
	);
};

export default withRouter(SendOpportunity);
