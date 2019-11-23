import React from "react";
import { FormGroup, Checkbox } from "@blueprintjs/core";
import { Opportunity } from "../../../types";

const IPhonePreview = require("../../../static/iphone.png");

interface Props {
	opportunity: Opportunity;
	sendAnonymously: boolean;
	setSendAnonymously: (value: boolean | ((value: boolean) => boolean)) => void;
}

const SendOpportunity: React.FC<Props> = ({
	opportunity,
	sendAnonymously,
	setSendAnonymously
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
			<img
				style={{ width: "500px" }}
				src={IPhonePreview}
				alt="convo"
			/>
		</div>
	);
};

export default SendOpportunity;
