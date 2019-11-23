import React from "react";
import "./ActionBar.scss";

const ActionBar: React.FC = ({ children }) => {
	return <div className="action-bar">{children}</div>;
};

export default ActionBar;
