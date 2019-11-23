import React from "react";
import { Button } from "@blueprintjs/core";
import "./Welcome.scss";
import { withRouter, RouterProps } from "react-router";
import LandingSvg from "../../images/landing.svg";

const Welcome: React.FC<RouterProps> = props => {
	return (
		<div className="welcome__outer-container">
			<div className="welcome__inner-container">
				<img className="landing-background" alt="landing" src={LandingSvg} />
				<Button
					className="linkedin-button"
					text="Login With LinkedIn"
					onClick={() => props.history.push("/dashboard")}
				/>
			</div>
		</div>
	);
};

export default withRouter(Welcome);
