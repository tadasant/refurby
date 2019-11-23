import React from "react";
import { Intent, Callout, Icon, Colors } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import { Match } from "../../../types";
import Matches from "../../../data/matches";

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

const MatchList: React.FC = props => {
	return (
		<div>
			<h2>Opportunity Matches</h2>
			<Callout intent={Intent.SUCCESS} icon={IconNames.ENDORSED}>
				42 people in your network are recommended for this opportunity!
			</Callout>
			<table className="bp3-html-table">
				<MatchListHeader />
				<tbody>
					{Matches.map(match => (
						<MatchListItem {...match} />
					))}
				</tbody>
			</table>
		</div>
	);
};

export default MatchList;
