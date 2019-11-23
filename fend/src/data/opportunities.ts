import { Opportunity } from "../types";

const OPPORTUNITIES: Opportunity[] = [
	{
		industry: "Computer Software",
		locationCity: "San Francisco",
		locationState: "CALIFORNIA",
		minYearsExperience: 0,
		highestLevelOfEducation: "Bachelors",
		title: "Software Engineer",
		blurb:
			"Seeking full stack software engineers for a 55 person startup that is fixing the software that doctors use. We use React, Rust, Azure and pay competitive San Francisco salaries.",
		stats: {
			referrals: 3,
			conversations: 15,
			outgoing: 291,
			lastSent: new Date(2019, 11, 20),
			moneyMade: "$9,000"
		}
	},
	{
		industry: "Computer Software",
		locationCity: "Palo Alto",
		locationState: "CALIFORNIA",
		minYearsExperience: 0,
		highestLevelOfEducation: "Bachelors",
		title: "Forward Deployed Engineer",
		blurb:
			"Seeking software engineers at Palantir. My team works on the Gotham map project.",
		stats: {
			referrals: 1,
			conversations: 9,
			outgoing: 98,
			lastSent: new Date(2019, 11, 21),
			moneyMade: "$1,000"
		}
	}
];

export default OPPORTUNITIES;
