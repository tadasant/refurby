import React from "react";
import {
	FormGroup,
	TextArea,
	NumericInput,
	Button,
	Label,
	Card,
	Elevation
} from "@blueprintjs/core";
import { Opportunity } from "../../../types";
import { INDUSTRY, DEGREES, US_STATE } from "../../../constants";
import _ from "lodash";
import { OpportunityStep } from "../OpportunityView";
import "./CreateOpportunity.scss";
import ActionBar from "../ActionBar";
import { withRouter, RouteComponentProps } from "react-router";

const WhiteFurby = require("../../../images/furby-white.png");

interface Props extends RouteComponentProps {
	opportunity: Opportunity;
	setOpportunity: (opportunity: Opportunity) => void;
	setStep: (step: OpportunityStep) => void;
}

const CreateOpportunity: React.FC<Props> = props => {
	const { opportunity, setOpportunity, setStep, history } = props;

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
		<React.Fragment>
			<img className="peeking-furby" src={WhiteFurby} alt="white-furby" />
			<Card elevation={Elevation.THREE} className="create-opportunity__card">
				<h2 className="broadcast-header">Broadcast New Opportunity</h2>
				<FormGroup className="opportunity__input">
					<Label>Title</Label>
					<input
						type="text"
						className="bp3-input"
						onChange={generateFieldChange("title")}
						value={opportunity.title}
					/>
				</FormGroup>
				<FormGroup className="opportunity__input">
					<Label>Blurb</Label>
					<TextArea onChange={generateFieldChange("blurb")} />
				</FormGroup>
				<FormGroup className="opportunity__input">
					<Label>City</Label>
					<input
						type="text"
						className="bp3-input"
						onChange={generateFieldChange("locationCity")}
						value={opportunity.locationCity}
					/>
				</FormGroup>
				<FormGroup className="opportunity__input">
					<Label>State</Label>
					<select
						onChange={generateFieldChange("locationState")}
						value={opportunity.locationState}
					>
						<option />
						{US_STATE.map(usState => (
							<option>{_.upperFirst(_.toLower(usState))}</option>
						))}
					</select>
				</FormGroup>
				<FormGroup className="opportunity__input">
					<Label>Industry</Label>
					<select
						onChange={generateFieldChange("industry")}
						value={opportunity.industry}
					>
						<option />
						{INDUSTRY.map(industry => (
							<option>{industry}</option>
						))}
					</select>
				</FormGroup>
				<FormGroup className="opportunity__input">
					<Label>Min. Years of Exp.</Label>
					<NumericInput
						className="min-yrs-exp-input"
						onValueChange={handleExperienceChange}
						value={opportunity.minYearsExperience}
						min={0}
					/>
				</FormGroup>
				<FormGroup className="opportunity__input">
					<Label>Highest Education</Label>
					<select
						onChange={generateFieldChange("highestLevelOfEducation")}
						value={opportunity.highestLevelOfEducation}
					>
						<option />
						{DEGREES.map(degree => (
							<option>{degree}</option>
						))}
					</select>
				</FormGroup>
			</Card>
			<ActionBar>
				<Button
					intent="none"
					text="Cancel"
					onClick={() => history.push("/dashboard")}
				/>
				<Button
					className="choose-recipients-button"
					intent="primary"
					text="Choose Recipients"
					onClick={() => setStep(OpportunityStep.MATCH)}
				/>
			</ActionBar>
		</React.Fragment>
	);
};

export default withRouter(CreateOpportunity);
