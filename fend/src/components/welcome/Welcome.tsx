import React from "react";
import "./Welcome.scss";
import { withRouter, RouterProps } from "react-router";

const LinkedInButton = require("../../images/linked-in-button.png");
const LandingSvg = require("../../images/landing.png");

const Welcome: React.FC<RouterProps> = props => {
	return (
		<div className="welcome__outer-container">
			<div className="welcome__inner-container">
				<img className="landing-background" alt="landing" src={LandingSvg} />
				<img
					onClick={() => props.history.push("/dashboard")}
					src={LinkedInButton}
					alt="linkedin"
					className="linked-in-button"
				/>
			</div>
		</div>
	);
};

export default withRouter(Welcome);
