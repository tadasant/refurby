import React, { useState, useEffect } from "react";
import {
	Intent,
	Callout,
	Icon,
	Colors,
	Button,
	Divider,
	Elevation,
	Card,
	Checkbox,
	Spinner
} from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import { Match } from "../../../types";
import Matches from "../../../data/matches";
import { OpportunityStep } from "../OpportunityView";
import "./MatchOpportunity.scss";
import _ from "lodash";
import ActionBar from "../ActionBar";

const WhiteFurby = require("../../../images/furby-white.png");

const MatchListHeader: React.FC = () => {
	return (
		<thead>
			<tr className="match-item">
				<th>&nbsp;</th>
				<th>Name</th>
				<th>1st / 2nd Degree</th>
				<th className="checkbox-cell">Send?</th>
			</tr>
		</thead>
	);
};
const MatchListItem: React.FC<Match & {
	chosenRecipientIds: number[];
	setChosenRecipientIds: React.Dispatch<React.SetStateAction<number[]>>;
}> = props => {
	const {
		id,
		name,
		degree,
		imageUrl,
		matchScore,
		setChosenRecipientIds,
		chosenRecipientIds
	} = props;
	const endorsed = matchScore !== undefined && matchScore > 50; // TODO: tweak :)

	const toggleCheckbox = () => {
		setChosenRecipientIds(prevIds => {
			if (chosenRecipientIds.includes(id)) {
				return _.remove(prevIds, compare => compare !== id);
			}
			return [...chosenRecipientIds, id];
		});
	};

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
			<td className="checkbox-cell">
				<Checkbox
					onChange={toggleCheckbox}
					checked={chosenRecipientIds.includes(id)}
				/>
			</td>
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
	id: {
		value: string;
	};
}

interface Props {
	setStep: (step: OpportunityStep) => void;
	chosenRecipientIds: number[];
	setChosenRecipientIds: React.Dispatch<React.SetStateAction<number[]>>;
}

const MatchOpportunity: React.FC<Props> = ({
	setStep,
	setChosenRecipientIds,
	chosenRecipientIds
}) => {
	const [matches, setMatches] = useState<Match[]>([]);
	const [randomUsers, setRandomUsers] = useState<RandomUser[]>([]);
	const [loadingTimerIsSet, setLoadingTimerIsSet] = useState<boolean>(false);

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
			setChosenRecipientIds(
				result
					.filter(result => result.matchScore && result.matchScore > 50)
					.map(result => result.id)
			);
		}

		getMatches();
	}, [setChosenRecipientIds]);

	useEffect(() => {
		async function getRandomUsers() {
			const result = await fetch(
				"https://randomuser.me/api/?results=110"
			).then(response => response.json());
			setRandomUsers(result.results);
		}
		getRandomUsers();
	}, []);

	if (!loadingTimerIsSet) {
		setTimeout(() => {
			setLoadingTimerIsSet(true);
		}, 2500 + Math.random() * 1000);
		return (
			<div>
				<img className="peeking-furby" src={WhiteFurby} alt="white-furby" />
				<Spinner intent="success" className="central-spinner" />
				<h4>Calculating Matches...</h4>
			</div>
		);
	}

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
							<MatchListItem
								{...match}
								chosenRecipientIds={chosenRecipientIds}
								setChosenRecipientIds={setChosenRecipientIds}
							/>
						))}
						{randomUsers.map(randomUser => (
							<MatchListItem
								setChosenRecipientIds={setChosenRecipientIds}
								id={parseInt(randomUser.id.value) * 10}
								degree={Math.ceil(Math.random() * 2)}
								imageUrl={randomUser.picture.medium}
								name={`${_.upperFirst(randomUser.name.first)} ${_.upperFirst(
									randomUser.name.last
								)}`}
								chosenRecipientIds={chosenRecipientIds}
							/>
						))}
					</tbody>
				</table>
				<Divider className="matches__button-divider" />
			</Card>

			<ActionBar>
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
			</ActionBar>
		</div>
	);
};

export default MatchOpportunity;
