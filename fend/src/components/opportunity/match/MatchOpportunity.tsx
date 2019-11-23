import React, { useState, useEffect } from "react";
import {
	Intent,
	Callout,
	Icon,
	Colors,
	Button,
	Divider,
	Elevation,
	Card
} from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import { Match } from "../../../types";
import Matches from "../../../data/matches";
import { OpportunityStep } from "../OpportunityView";
import "./MatchOpportunity.scss";
import _ from "lodash";

const WhiteFurby = require("../../../images/furby-white.png");

const MatchListHeader: React.FC = () => {
	return (
		<thead>
			<tr className="match-item">
				<th>&nbsp;</th>
				<th>Name</th>
				<th>1st / 2nd Degree</th>
			</tr>
		</thead>
	);
};
const MatchListItem: React.FC<Match> = props => {
	const { name, degree, imageUrl, matchScore } = props;
	const endorsed = matchScore !== undefined && matchScore > 50; // TODO: tweak :)

	return (
		<tr className="match-item">
			<td className="img-cell">
				<img alt="furby pics" className="match-avatar" src={imageUrl} />
				{endorsed ? (
					<Icon
						className="endorsed-icon"
						color={Colors.GREEN3}
						icon={IconNames.ENDORSED}
					/>
				) : (
					" "
				)}
			</td>
			<td>{name}</td>
			<td>{degree}</td>
		</tr>
	);
};

interface RandomUser {
	name: {
		first: string;
		last: string;
	};
	picture: {
		medium: string;
	};
}

interface Props {
	setStep: (step: OpportunityStep) => void;
}

const MatchOpportunity: React.FC<Props> = ({ setStep }) => {
	const [matches, setMatches] = useState<Match[]>([]);
	const [randomUsers, setRandomUsers] = useState<RandomUser[]>([]);

	useEffect(() => {
		async function getMatches() {
			// FIXME datafetching
			// const result = await fetch("url", {
			//   method: 'POST', // *GET, POST, PUT, DELETE, etc.
			//   headers: {
			//     'Content-Type': 'application/json'
			//     // 'Content-Type': 'application/x-www-form-urlencoded',
			//   },
			//   body: JSON.stringify(opportunity) // body data type must match "Content-Type" header
			// }).json();
			const result = await Promise.resolve(Matches);
			setMatches(result);
		}

		getMatches();
	}, []);

	useEffect(() => {
		async function getRandomUsers() {
			const result = await fetch(
				"https://randomuser.me/api/?results=110"
			).then(response => response.json());
			setRandomUsers(result.results);
		}
		getRandomUsers();
	}, []);

	return (
		<div>
			<img className="peeking-furby" src={WhiteFurby} alt="white-furby" />
			<Card elevation={Elevation.THREE} className="match-opportunity__card">
				<h2 className="match-header">Opportunity Matches</h2>
				<Callout intent={Intent.SUCCESS} icon={IconNames.ENDORSED}>
					4 people in your network are recommended for this opportunity!
				</Callout>
				<table className="bp3-html-table">
					<MatchListHeader />
					<tbody>
						{matches.map(match => (
							<MatchListItem {...match} />
						))}
						{randomUsers.map(randomUser => (
							<MatchListItem
								degree={Math.ceil(Math.random() * 2)}
								imageUrl={randomUser.picture.medium}
								name={`${_.upperFirst(randomUser.name.first)} ${_.upperFirst(
									randomUser.name.last
								)}`}
							/>
						))}
					</tbody>
				</table>
				<Divider className="matches__button-divider" />
			</Card>

			<Button
				intent="none"
				text="Back"
				onClick={() => setStep(OpportunityStep.CREATE)}
			/>

			<Button
				className="preview-button"
				intent="primary"
				text="Preview Broadcast"
				onClick={() => setStep(OpportunityStep.CONFIRM)}
			/>
		</div>
	);
};

export default MatchOpportunity;
