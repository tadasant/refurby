import React from "react";
import { FormGroup, TextArea, NumericInput } from "@blueprintjs/core";
import { Opportunity } from "../../../types";
import { INDUSTRY, DEGREES, US_STATE } from "../../../constants";
import _ from "lodash";

interface Props {
	opportunity: Opportunity;
	setOpportunity: (opportunity: Opportunity) => void;
}

const CreateOpportunity: React.FC<Props> = props => {
	const { opportunity, setOpportunity } = props;

	const generateFieldChange = (
		field: keyof Opportunity
	): React.FormEventHandler<
		HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
	> => event => {
		const { value } = event.currentTarget;
		setOpportunity({
			...opportunity,
			[field]: value
		});
	};

	const handleExperienceChange = (value: number) => {
		setOpportunity({
			...opportunity,
			minYearsExperience: value
		});
	};

	return (
		<div>
			<h2>Broadcast New Opportunity</h2>
			<FormGroup label="Title">
				<input
					type="text"
					className="bp3-input"
					onChange={generateFieldChange("title")}
					value={opportunity.title}
				/>
			</FormGroup>
			<FormGroup label="Blurb">
				<TextArea onChange={generateFieldChange("blurb")} />
			</FormGroup>
			<FormGroup label="Industry">
				<select
					onChange={generateFieldChange("industry")}
					value={opportunity.industry}
				>
					{INDUSTRY.map(industry => (
						<option>{industry}</option>
					))}
				</select>
			</FormGroup>
			<FormGroup label="Minimum Education">
				<select
					onChange={generateFieldChange("highestLevelOfEducation")}
					value={opportunity.industry}
				>
					{DEGREES.map(degree => (
						<option>{degree}</option>
					))}
				</select>
			</FormGroup>
			<FormGroup label="City">
				<input
					type="text"
					className="bp3-input"
					onChange={generateFieldChange("locationCity")}
					value={opportunity.locationCity}
				/>
			</FormGroup>
			<FormGroup label="State">
				<select
					onChange={generateFieldChange("locationState")}
					value={opportunity.locationState}
				>
					{US_STATE.map(usState => (
						<option>{_.upperFirst(_.toLower(usState))}</option>
					))}
				</select>
			</FormGroup>
			<FormGroup label="Minimum Years of Experience">
				<NumericInput
					onValueChange={handleExperienceChange}
					value={opportunity.minYearsExperience}
					min={0}
				/>
			</FormGroup>
		</div>
	);
};

export default CreateOpportunity;
