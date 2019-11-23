import React from "react";
import { Card, Elevation } from "@blueprintjs/core";
import { Opportunity } from "../../types";
import _ from "lodash";

interface Props {
	opportunity: Opportunity;
	className?: string;
}

const OpportunityCard: React.FC<Props> = ({ opportunity, className }) => {
	return (
		<Card elevation={Elevation.ONE} className={className}>
			{opportunity.title} <br />
			{opportunity.locationCity},{" "}
			{_.upperFirst(_.lowerCase(opportunity.locationState))} <br />
			{opportunity.industry} <br />
			{opportunity.highestLevelOfEducation} <br />
			{opportunity.minYearsExperience} years experience
		</Card>
	);
};

export default OpportunityCard;
