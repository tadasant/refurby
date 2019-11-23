import React from "react";
import { FormGroup, Checkbox, Button } from "@blueprintjs/core";
import { Opportunity } from "../../../types";
import { withRouter, RouteComponentProps } from "react-router";

const IPhonePreview = require("../../../static/iphone.png");

interface Props extends RouteComponentProps<any> {
	opportunity: Opportunity;
	sendAnonymously: boolean;
	setSendAnonymously: (value: boolean | ((value: boolean) => boolean)) => void;
}

const SendOpportunity: React.FC<Props> = ({
	opportunity,
	sendAnonymously,
	setSendAnonymously,
	history
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
				intent="primary"
				text="Preview Broadcast"
				onClick={() => history.push("/dashboard")}
			/>
		</div>
	);
};

export default withRouter(SendOpportunity);
