import React, { useState, useEffect } from "react";
import { Intent, Callout, Icon, Colors, Button } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import { Match } from "../../../types";
import Matches from "../../../data/matches";
import { OpportunityStep } from "../OpportunityView";

const MatchListHeader: React.FC = () => {
	return (
		<thead>
			<tr className="match-item">
				<th>&nbsp;</th>
				<th>Name</th>
				<th>Endorsed</th>
				<th>1st / 2nd Degree</th>
			</tr>
		</thead>
	);
};
const MatchListItem: React.FC<Match> = props => {
	const { name, degree, imageUrl, matchScore } = props;
	const endorsed = matchScore > 50; // TODO: tweak :)

	return (
		<tr className="match-item">
			<td>
				<img alt="furby pics" className="match-avatar" src={imageUrl} />
			</td>
			<td>{name}</td>
			<td>
				{endorsed ? (
					<Icon color={Colors.GREEN3} icon={IconNames.ENDORSED} />
				) : (
					" "
				)}
			</td>
			<td>{degree}</td>
		</tr>
	);
};

interface Props {
	setStep: (step: OpportunityStep) => void;
}

const MatchOpportunity: React.FC<Props> = ({ setStep }) => {
	const [matches, setMatches] = useState<Match[]>([]);

	useEffect(() => {
		async function getMatches() {
			// FIXME datafetching
			// const result = await fetch("https://hn.algolia.com/api/v1/search?query=redux");
			const result = await Promise.resolve(Matches);
			setMatches(result);
		}

		getMatches();
	}, []);

	return (
		<div>
			<h2>Opportunity Matches</h2>
			<Callout intent={Intent.SUCCESS} icon={IconNames.ENDORSED}>
				4 people in your network are recommended for this opportunity!
			</Callout>
			<table className="bp3-html-table">
				<MatchListHeader />
				<tbody>
					{matches.map(match => (
						<MatchListItem {...match} />
					))}
				</tbody>
			</table>
			<Button
				intent="none"
				text="Back"
				onClick={() => setStep(OpportunityStep.MATCH)}
			/>
			<Button
				intent="primary"
				text="Preview Broadcast"
				onClick={() => setStep(OpportunityStep.CONFIRM)}
			/>
		</div>
	);
};

export default MatchOpportunity;
