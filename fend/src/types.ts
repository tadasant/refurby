export interface Opportunity {
	industry?: string;
	minYearsExperience?: number;
	locationCity?: string;
	locationState?: string;
	highestLevelOfEducation?: string;
	blurb?: string;
	title?: string;
}

export interface Match {
	id?: number;
	name: string;
	degree: number;
	linkedInUrl?: string;
	imageUrl?: string;
	matchScore?: number;
	matchFields?: string[];
}
