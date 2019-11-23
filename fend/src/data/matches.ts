import { Match } from "../types";

const MATCHES: Match[] = [
	{
		id: 1,
		name: "Furby",
		degree: 1,
		linkedInUrl: "https://www.linkedin.com/company/furby",
		imageUrl:
			"https://static.businessinsider.sg/2019/03/03/5c7d63e72628982448338075.png",
		matchScore: 100,
		matchFields: ["industry"]
	},
	{
		id: 2,
		name: "Tadas Antanavicius",
		degree: 1,
		linkedInUrl: "https://www.linkedin.com/in/antanavicius/",
		imageUrl:
			"https://media.licdn.com/dms/image/C5603AQG6c6WUatDAXA/profile-displayphoto-shrink_200_200/0?e=1579737600&v=beta&t=335KWeXVQE6vL9R5w3DtHXg3ln_Wawt9YT1Ax7Xgi1o",
		matchScore: 78,
		matchFields: ["education", "location"]
	},
	{
		id: 3,
		name: "Adrian Lievano",
		degree: 2,
		linkedInUrl: "https://www.linkedin.com/in/adrianlievano/",
		imageUrl:
			"https://media.licdn.com/dms/image/C5603AQFhcCzxzbeuXA/profile-displayphoto-shrink_200_200/0?e=1579737600&v=beta&t=vcKWB5PUyHoriQp9wvvMpHJwTQVt9YMNKr-RBmObhOA",
		matchScore: 99,
		matchFields: ["experience"]
	},
	{
		id: 4,
		name: "Morgan Snyder",
		degree: 2,
		linkedInUrl: "https://www.linkedin.com/in/mosnyder/",
		imageUrl:
			"https://media.licdn.com/dms/image/C5603AQFSDThsN3EGoQ/profile-displayphoto-shrink_200_200/0?e=1579737600&v=beta&t=oMhk2F90xSR-Jhau9fe2awfe6iHe6_oLTlQJV8e300U",
		matchScore: 60,
		matchFields: ["education", "location"]
	},
	{
		id: 5,
		name: "Andrew Li",
		degree: 1,
		linkedInUrl: "https://www.linkedin.com/in/andrewli1030/",
		imageUrl:
			"https://media.licdn.com/dms/image/C4D03AQH0XJ5Nc1J7PA/profile-displayphoto-shrink_200_200/0?e=1579737600&v=beta&t=PSwTeI3igU-y_5ntri2pDojj60zyyaHnmogqeQrn_xs",
		matchScore: 28,
		matchFields: ["location"]
	},
	{
		id: 6,
		name: "Dennis Sell",
		degree: 2,
		linkedInUrl: "https://www.linkedin.com/in/selld/",
		imageUrl:
			"https://media.licdn.com/dms/image/C5603AQFOvvj_VQvjhw/profile-displayphoto-shrink_200_200/0?e=1579737600&v=beta&t=UEf_W1oyNW_y0JMGIyaVtjPSGTmoNrQWCjTMJgkxmQ0",
		matchScore: 21,
		matchFields: []
	}
];

export default MATCHES;
