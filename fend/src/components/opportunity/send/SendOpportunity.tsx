import React from "react";
import { FormGroup, Checkbox } from "@blueprintjs/core";
import { Opportunity } from "../../../types";

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
			<img
				src="https://discussions.apple.com/content/attachment/800090040"
				alt="convo"
			/>
			<FormGroup label="Send anonymously?" inline>
				<Checkbox checked={sendAnonymously} onChange={handleToggle} />
			</FormGroup>
		</div>
	);
};

export default SendOpportunity;
