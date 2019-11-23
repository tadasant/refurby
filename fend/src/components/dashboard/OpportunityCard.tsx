import React from "react";
import { Card, Elevation, Tag } from "@blueprintjs/core";
import { Opportunity } from "../../types";
import _ from "lodash";
import "./OpportunityCard.scss";

interface Props {
	opportunity: Opportunity;
	className?: string;
}

const OpportunityCard: React.FC<Props> = ({ opportunity, className }) => {
	return (
		<Card elevation={Elevation.ONE} className={`opportunity_card ${className}`}>
			<div className="opportunity_card__column1">
				<div>
					<p className="opportunity__title">{opportunity.title}</p>
					<p className="opportunity__location">
						{opportunity.locationCity},{" "}
						{_.upperFirst(_.lowerCase(opportunity.locationState))}{" "}
					</p>
				</div>
				<div>
					<Tag className="opportunity__tag" intent="none">
						{opportunity.industry}
					</Tag>
					<Tag className="opportunity__tag" intent="none">
						{opportunity.highestLevelOfEducation}
					</Tag>
					<Tag className="opportunity__tag" intent="none">
						{opportunity.minYearsExperience} years of exp.
					</Tag>
				</div>
			</div>
			<div className="opportunity_card__column2">
				<div className="opportunity_card__stat">
					<h3>
						<b>3</b>
					</h3>
					<p className="subtitle">Successful Referrals</p>
				</div>

				<div className="opportunity_card__stat">
					<h3>
						<b>15</b>
					</h3>
					<p className="subtitle">Conversations Started</p>
				</div>

				<div className="opportunity_card__stat">
					<h3>
						<b>291</b>
					</h3>
					<p className="subtitle">SMS Outgoing</p>
				</div>

				<div className="opportunity_card__stat">
					<h3>
						<b>11:27AM on 11/21/19</b>
					</h3>
					<p className="subtitle">Last Broadcast</p>
				</div>
			</div>
			<div className="opportunity_card__column3">
				<div className="opportunity_card__column3__container">
					<h1>$9,000</h1>
					<p className="subtitle">earned to date</p>
				</div>
			</div>
		</Card>
	);
};

export default OpportunityCard;
